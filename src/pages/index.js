import { graphql, Link } from "gatsby"
import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = (props) => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="lg:grid lg:grid-cols-3 md:gap-2 lg:gap-4 p-2 flex flex-col gap-2">
        <div className="col-start-2 text-lg">
          <Bio />
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link
              to={`blog${node.fields.slug}`}
              className="lg:col-start-2 p-4 bg-white text-gray-800 rounded-md shadow-md 
              hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-gray-50 hover:-translate-y-1 transition duration-300 flex flex-col justify-center gap-1"
              key={node.fields.slug}
            >
              <h3 className="text-xl">{title}</h3>
              <small>
                <span className="border rounded-full px-2">
                  {node.frontmatter.date}
                </span>
              </small>
              <p
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
