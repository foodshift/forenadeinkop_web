/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from 'prop-types'
import React from 'react'
import { Section } from '../components/Section'
import ImgFoodShift from '../images/logos/foodshift.png'
import ImgCoompanion from '../images/logos/coompanion.jpg'
import ImgJordbruksfonden from '../images/logos/jordbruksfonden.jpg'

const Image = (props) => {
  return (
    <img src={props.src} className='w-10' t />
  )
}

const Layout = ({ children }) => {
  return (
    <div className='w-100 b--black-10 bg-white sans-serif'>
      <main>{children}</main>
      <footer className='pt5'>
        <Section backgroundColor='bg-white' textColor='black-50'>
          <div className='w-100 w-40-l f6 copy lh-copy dib v-top'>
            Förenade Inköp – Ett informationsprojekt inom ramen för Jordbruksverkets satsning på korta livsmedelskedjor. Projektet har som övergripande mål att bidra till att fler inköpsföreningar startas samt att befintliga inköpsföreningar inleder djupare samarbeten.
            <br />
            <br />
            Skicka gärna ett mejl för att komma i kontakt med projektgruppen. <a href='mailto:hej@forenadeinkop.se' className='link underline green hover-yellow'>hej@forenadeinkop.se</a>
          </div>
          <div className='w-90 w-60-l dib v-top tl tr-l pt4 pt0-l'>
            <a href='https://fooddhift.se' className='v-mid'><img src={ImgFoodShift} className='w-20 pr5' /></a>
            <a href='https://sormland.coompanion.se/' className='v-mid'><img src={ImgCoompanion} className='w-30 pr5' /></a>
            <img src={ImgJordbruksfonden} className='w-20 v-mid' />
          </div>
        </Section>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
