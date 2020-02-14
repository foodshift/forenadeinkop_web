/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // < Header siteTitle = { data.site.siteMetadata.title } /> -->
  //   <footer>
  //   © {new Date().getFullYear()},
  //     {` `}
  //   <a href="https://foodshift.se">Food Shift</a>
  // </footer>

  return (
    <div className='w-100 b--black-10 bg-white sans-serif'>
      <main>{children}</main>
      <footer class="bg-white black-70 ph3 ph5-ns pv5 pv6-ns bt b--black-10">
        <div class="mw9 center">
          <div class="mb5 lh-copy">
            <a class="black-70 link hover-blue b dib mr3 mb3" href="https://foodshift.se" title="Food Shift">
              Food Shift</a>
          </div>
        </div>
        <p class="f6 measure copy lh-copy">
          Food Shift is an open collective nourishing and connecting people, projects and organisations in emerging regenerative food systems.
  </p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
