import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="flex flex-col flex-grow">
          <div className="lg:grid lg:grid-cols-3 flex-1">
            <article className="lg:col-start-2">
              <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
              />
              <h1 className="text-4xl title">{post.frontmatter.title}</h1>
              <p className="text-xs sub-title">{post.frontmatter.date}</p>
              <div className="my-8 flex flex-col gap-2">
                <MDXRenderer
                  components={{
                    pre: ({ className, ...p }) => (
                      <pre {...p} className={className + " my-2"} />
                    ),
                  }}
                >
                  {post.body}
                </MDXRenderer>
              </div>
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
            </article>
          </div>
          <ul className="flex flex-col md:flex-row justify-between items-center mx-4">
            <li>
              {previous && (
                <Link
                  className="p-2 shadow-none hover:bg-gray-100"
                  to={`/blog${previous.fields.slug}`}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link
                  className="p-2 shadow-none hover:bg-gray-100"
                  to={`/blog${next.fields.slug}`}
                  rel="next"
                >
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
