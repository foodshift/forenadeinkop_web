import React from "react"
import { Link } from "gatsby"

import { css, jsx } from '@emotion/core'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const color = 'white'

const Section = (props) => {
  return (
    <section className='bg-green black-80 pv5 pv6-ns bb b--black-10'>
      <div className='ph3 ph5-ns'>
        {props.children}

      </div>
    </section>
  )
}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <div class="center mw9">
        <h3 class="f5 fw6 ttu tracke">Förenade Inköp</h3>
      </div>

      <div class="cf w-100 center mw9">
        <blockquote class="fl w-100 mh0 mb2 mb3-ns border-box">
          <p class="f4 f2-m mt0 db fl w-100 f-subheadline-l lh-copy lh-title-l measure mb4 fw6">
            Kooperativ livsmedelshandel för lokal utveckling.
              </p>
          <p class="fl w-100 w-50-l mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l">
            Ett informationsprojekt inom ramen för Jordbruksverkets satsning på korta livsmedelskedjor. Projektet har som övergripande mål att bidra till att fler inköpsföreningar startas samt att befintliga inköpsföreningar inleder djupare samarbeten.
              </p>

        </blockquote>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
