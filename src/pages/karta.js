import 'ol/ol.css'
import 'ol-ext/dist/ol-ext.min.css'
import 'mapbox-gl/dist/mapbox-gl.css'

import '../css/karta.css'
import '../css/fonts.css'

import { Circle as CircleStyle, Fill, Style } from 'ol/style'
import { DragRotateAndZoom, Select, defaults as defaultInteractions } from 'ol/interaction'
import { Layer, Vector as VectorLayer } from 'ol/layer'
import { Link, graphql } from 'gatsby'
import React, { useEffect, useRef } from 'react'

import { fromLonLat, toLonLat } from 'ol/proj'

import $ from 'jquery'
import DrawerLogos from '../images/drawer-logos.png'
import { GeoJSON } from 'ol/format'
import Map from 'ol/Map'
import Overlay from 'ol-ext/control/Overlay'
import Popup from 'ol-ext/overlay/Popup'
import { Section } from '../components/Section'
import Seo from '../components/seo'
import { Vector as VectorSource } from 'ol/source'
import View from 'ol/View'

import baseX from 'base-x'
import fm from 'front-matter'
import mapboxgl from 'mapbox-gl'
import marked from 'marked'
import { pointerMove } from 'ol/events/condition'

const CoopMap = (props) => {
  const mapDiv = useRef(null)

  const pointStyle = new CircleStyle({
    radius: 6,
    fill: new Fill({ color: '#19a974' })
  })

  const pointHoverStyle = new CircleStyle({
    radius: 7,
    fill: new Fill({ color: '#19a97499' })
  })

  const pointSelectedStyle = new CircleStyle({
    radius: 6,
    fill: new Fill({ color: 'gold' })
  })

  const mapStyles = {
    Point: new Style({
      image: pointStyle
    })
  }

  const hoverMapStyles = {
    Point: new Style({
      image: pointHoverStyle
    })
  }

  const selectedMapStyles = {
    Point: new Style({
      image: pointSelectedStyle
    })
  }

  const styleFunction = function (feature) {
    return mapStyles[feature.getGeometry().getType()]
  }

  const hoverStyleFunction = function (feature) {
    return hoverMapStyles[feature.getGeometry().getType()]
  }

  const selectedStyleFunction = function (feature) {
    return selectedMapStyles[feature.getGeometry().getType()]
  }

  const center = [
    15.1871642,
    62.0924094
  ]

  const map = new Map({
    interactions: defaultInteractions().extend([
      new DragRotateAndZoom()
    ]),
    view: new View({
      center: fromLonLat(center),
      zoom: 5
    })
  })

  const popup = new Popup({
    popupClass: 'default',
    closeBox: false,
    positioning: 'auto',
    autoPan: true,
    autoPanAnimation: { duration: 250 }
  })
  map.addControl(popup)

  const showPopup = (feature) => {
    const title = () => `<div>${feature.get('namn')}</div>`
    const content = `
        <div class='fi-green f5 fw6'>
          ${title()}
        </div>
      `
    popup.show(feature.getGeometry().getFirstCoordinate(), content)
  }

  const bottomDrawer = new Overlay({
    closeBox: true,
    className: 'slide-up bottomDrawer shadow-2'
  })
  bottomDrawer.on('change:visible', (e) => {
    if (!e.visible) {
      selectClick.getFeatures().clear()
    }
  })
  map.addControl(bottomDrawer)

  const sideDrawer = new Overlay({
    closeBox: true,
    className: 'slide-left sideDrawer shadow-2'
  })
  sideDrawer.on('change:visible', (e) => {
    if (!e.visible) {
      selectClick.getFeatures().clear()
    }
  })
  map.addControl(sideDrawer)

  const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const base62Decoder = baseX(BASE62)

  const getOverlayContent = (feature) => {
    // Override function
    const renderer = {
      image (href, title, text) {
        href = href.substring(9)
        const parts = href.split('.')
        const decodedBuffer = base62Decoder.decode(parts[0])
        const hexString = Buffer.from(decodedBuffer).toString('hex')
        return `<img src="https://foodshift.se/uploads/default/original/1X/${hexString}.${parts[1]}"/>`
      },
      link (href, title, text) {
        return `<a href='${href}' title='${title}' class='link fi-link'>${text}</a>`
      }
    }

    marked.use({ renderer })

    const title = `
      <h2 class='tk-rift-soft f2-l f3 lh-copy mt0 mb1'>
        ${feature.get('namn')}
      </h2>
    `
    const parsedRaw = fm(feature.get('raw'))
    const body = `
    <p>
      ${marked(parsedRaw.body)}
    <p>
    `
    const link = `
      <p>
        <a class='link fi-link' href='https://foodshift.se/t/${feature.get('slug')}/${feature.get('id')}' >✍️ Redigera / kommentera</a>
      </p>
    `
    const content = `
      <div class='fi-gray tk-atten-round-new ph4 pv4 lh-copy f5 f4-l mb3 my-selectable measure center'>
        ${title}
        ${body}
        ${link}
      </div>
      `
    return content
  }

  const selectPointerMove = new Select({
    condition: pointerMove,
    style: hoverStyleFunction
  })
  map.addInteraction(selectPointerMove)
  selectPointerMove.on('select', function (e) {
    const feature = e.selected[0]
    if (feature) {
      showPopup(feature)
      return
    }
    setTimeout(() => { popup.hide() }, 300)
  })

  const openDrawer = (content) => {
    if (window.innerHeight > window.innerWidth) {
      bottomDrawer.setContent(content)
      bottomDrawer.show()
      return
    }
    sideDrawer.setContent(content)
    sideDrawer.show()
  }
  const selectClick = new Select({
    style: selectedStyleFunction
  })
  map.addInteraction(selectClick)
  selectClick.on('select', function (e) {
    const feature = e.selected[0]
    if (feature) {
      map.getView().animate({
        center: feature.getGeometry().getCoordinates(),
        duration: 500
      })
      const content = getOverlayContent(feature)
      openDrawer(content)
      return
    }
    bottomDrawer.hide()
    sideDrawer.hide()
  })

  const getMapboxLayer = (mapboxMap) => {
    const layer = new Layer({
      render: function (frameState) {
        const canvas = mapboxMap.getCanvas()
        const viewState = frameState.viewState

        const visible = layer.getVisible()
        canvas.style.display = visible ? 'block' : 'none'

        const opacity = layer.getOpacity()
        canvas.style.opacity = opacity

        // adjust view parameters in mapbox
        const rotation = viewState.rotation
        if (rotation) {
          mapboxMap.rotateTo(-rotation * 180 / Math.PI, {
            animate: false
          })
        }
        mapboxMap.jumpTo({
          center: toLonLat(viewState.center),
          zoom: viewState.zoom - 1,
          animate: false
        })

        // cancel the scheduled update & trigger synchronous redraw
        // see https://github.com/mapbox/mapbox-gl-js/issues/7893#issue-408992184
        // NOTE: THIS MIGHT BREAK WHEN UPDATING MAPBOX
        if (mapboxMap._frame) {
          mapboxMap._frame.cancel()
          mapboxMap._frame = null
        }
        mapboxMap._render()

        return canvas
      }
    })
    return layer
  }

  useEffect(() => {
    map.setTarget(mapDiv.current)

    const mapboxMap = new mapboxgl.Map({
      container: mapDiv.current,
      style: 'https://api.maptiler.com/maps/positron/style.json?key=yvAwxeg4iuQiJtU84sJf'
    })

    const geoJSON = props.data.kooperativ.topic_list.childGeoJson.data

    const markerSource = new VectorSource({
      features: (new GeoJSON()).readFeatures(geoJSON)
    })
    const markerLayer = new VectorLayer({
      source: markerSource,
      style: styleFunction
    })
    map.once('postrender', function (event) {
      $('#breadcrumb').appendTo(
        $('.ol-overlaycontainer')
      )
      openDrawer($('#welcome').html())
    })
    map.addLayer(getMapboxLayer(mapboxMap))
    map.addLayer(markerLayer)
  }, [])

  return (
    <div ref={mapDiv} id='mapContainer' className='w-100 h-100' />
  )
}

const IndexPage = ({ data }) => (
  <>
    <Seo title='Förenade Inköp – Karta' description='En karta över svenska matkooperativ – kooperativa matbutiker, inköpsföreningar, producentkooperativ och personalkooperativ.' />

    <div className='w-100 b--black-10 sans-serif' style={{ height: '100vh' }}>
      <div className='dn'>
        <div id='welcome'>
          <div className='fi-gray tk-atten-round-new ph4 pv4 lh-copy f5 f4-l mb3 my-selectable measure center'>
            <h2 className='tk-rift-soft f2-l f3 lh-copy mt0 mb1'>
              En karta över svenska matkooperativ
            </h2>
            <p>
              Kooperativa matbutiker, inköpsföreningar, producentkooperativ, personalkooperativ. Vilka småskaliga kooperativa verksamheter med fokus på mat finns i Sverige? <b>Den här kartan försöker ge lite överblick!</b>
            </p>
            <p>
              Kartan är ett resultat av arbetet i projektet Förenade Inköp – ett projekt med mål att fler inköpsföreningar och lokala kooperativa matbutiker startas. Vi vill också bidra till att befintliga föreningar inleder djupare samarbeten.
            </p>
            <p>
              Saknar du någon verksamhet? Du kan själv lägga till eller redigera information.
            </p>
            <p>
              <a href='https://foodshift.se/c/forenade-inkop/kooperativ/35' className='link dim br2 ph3 pv2 ml2 mb2 dib white bg-fi-green b--none'>Skapa / redigera</a>
            </p>
            <p>
              Skicka gärna ett mejl för att komma i kontakt med projektgruppen. <a href='mailto:hej@forenadeinkop.se' className='link fi-link'>hej@forenadeinkop.se</a>
            </p>
            <p>
              <img src={DrawerLogos} className='w-100 mt5' />

            </p>
          </div>
        </div>
        <div id='breadcrumb' className='absolute z-1'>
          <Section backgroundColor='transparent'>
            <div className='center mw9 pt5 mb4 tk-rift-soft f3 f2-l lh-copy'>
              <Link to='/' className='menu fi-gray link underline'>Förenade Inköp</Link> / <span className='menu-current fi-gray'>KARTA</span>
            </div>

          </Section>
        </div>
      </div>
      {(typeof window !== 'undefined') ? (
        <CoopMap data={data} />
      ) : null}
    </div>
  </>

)

export const query = graphql`
  query {
    kooperativ {
      topic_list {
        childGeoJson {
          data {
            features {
              geometry {
                type
                coordinates
              }
              properties {
                stad
                gatuadress
                namn
                slug
                id
                raw
              }
              type
            }
            type
          }
        }
      }
    }
  }
  `

export default IndexPage
