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
            <p className="text-xs">
              My name is <strong>{author}</strong>.{` `}
              I'm a Frontend developer at{" "}
              <a href={`https://www.openweb.com/`}>OpenWeb</a> and writing about
              Web technologies.{" "}
              <a href={`https://twitter.com/${social.twitter}`}>
                Say hi to me on Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    # avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
    #   childImageSharp {
    #     fixed(width: 50, height: 50) {
    #       ...GatsbyImageSharpFixed
    #     }
    #   }
    # }
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
