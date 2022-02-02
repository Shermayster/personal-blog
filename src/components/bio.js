/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Bio({ data }) {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className="flex gap-3 my-8 items-center">
            <div>
              <Img
                className="rounded-full"
                fixed={data.file.childImageSharp.fixed}
              />
            </div>
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
    file(sourceInstanceName: { eq: "assets" }, name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
