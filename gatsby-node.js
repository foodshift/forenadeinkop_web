/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { Client, Status } = require('@googlemaps/google-maps-services-js')
const fm = require('front-matter')
const { toMercator } = require('@turf/projection')

const geocode = async (client, query) => {
  try {
    let googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY
    if (!googleMapsApiKey) {
      const dotenv = require('dotenv')
      dotenv.config()
      googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY
      if (!googleMapsApiKey) {
        console.log('GOOGLE_MAPS_API_KEY is undefined')
        return null
      }
    }

    const result = await client
      .geocode({
        params: {
          address: query,
          key: googleMapsApiKey
        },
        timeout: 1000
      })
    if (result.data.status === Status.OK) {
      return (result.data.results[0].geometry.location)
    }
  } catch (e) {
    console.log(e)
  }
  return null
}

const buildGeoJSON = async (data) => {
  const client = new Client({})
  const features = []
  for (const topic of data.topics) {
    try {
      const parsedRaw = fm(topic.raw)

      if (parsedRaw.attributes.stad) {
        const query = parsedRaw.attributes.gatuadress + ', ' + parsedRaw.attributes.stad

        const latLng = await geocode(client, query)
        const coordinates = [latLng.lng, latLng.lat]

        const feature = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: coordinates
          },
          properties: {
            stad: parsedRaw.attributes.stad,
            gatuadress: parsedRaw.attributes.stad,
            beskrivning: parsedRaw.attributes.beskrivning,
            namn: topic.title,
            slug: topic.slug,
            id: topic.id,
            raw: topic.raw
          }
        }
        features.push(feature)
      }
    } catch (e) {
      console.log(e)
    }
  }

  if (features.length > 0) {
    let geoJSON = {
      type: 'FeatureCollection'
    }
    geoJSON.features = features
    geoJSON = toMercator(geoJSON, true)
    return geoJSON
  }
  return null
}

async function onCreateNode({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest
}) {
  if (node.internal.type === 'topic_list') {
    const { createNode, createParentChildLink } = actions
    const geoJSON = await buildGeoJSON(node)
    if (geoJSON) {
      const geoNode = {
        data: geoJSON,
        id: createNodeId(`${node.id}geoJSON`),
        parent: node.id,
        internal: {
          contentDigest: createContentDigest(geoJSON),
          type: 'geoJSON'
        }
      }
      createNode(geoNode)
      createParentChildLink({ parent: node, child: geoNode })
    }
  }
}
exports.onCreateNode = onCreateNode

exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions }) => {
  switch (stage) {
    case 'build-html':
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /ol/,
              use: [loaders.null()]
            },
            {
              test: /front-matter/,
              use: [loaders.null()]
            },
            {
              test: /mapbox-gl/,
              use: [loaders.null()]
            }

          ]
        }
      })
      break
  }
}
