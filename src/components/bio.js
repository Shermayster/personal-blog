/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className="flex gap-2 my-8 items-center">
            <p>
              My name is {author}.{` `}
              I'm building high performant React micro-fronted apps at{" "}
              <a href={`https://www.openweb.com/`}>OpenWeb</a>.
              <div>
                <a href={`https://twitter.com/${social.twitter}`}>
                  Say hi to me on Twitter
                </a>
              </div>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
