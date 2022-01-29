import { graphql, Link } from "gatsby"
import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Blog = (props) => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="grid grid-cols-3 gap-4 p-2">
        <div className="col-start-2 text-lg">
          <Bio />
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link
              to={`blog${node.fields.slug}`}
              className="col-start-2 p-4 bg-white text-indigo-900 hover:bg-indigo-800 hover:text-emerald-50 hover:shadow shadow-none flex flex-col justify-center"
              key={node.fields.slug}
            >
              <h3 className="text-lg ">{title}</h3>
              <small>{node.frontmatter.date}</small>
              <p
                className="text-xs"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
