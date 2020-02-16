/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='w-100 b--black-10 bg-white sans-serif'>
      <main>{children}</main>
      <footer className='bg-white black-70 ph3 ph5-ns pv5 pv6-ns bt b--black-10'>
        <p className='f6 measure copy lh-copy'>
          Förenade Inköp – Ett informationsprojekt inom ramen för Jordbruksverkets satsning på korta livsmedelskedjor. Projektet har som övergripande mål att bidra till att fler inköpsföreningar startas samt att befintliga inköpsföreningar inleder djupare samarbeten.
        </p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
