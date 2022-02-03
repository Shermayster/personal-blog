import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Highlight, { defaultProps } from "prism-react-renderer"
import dracula from "prism-react-renderer/themes/dracula"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPostTemplate = (props) => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  const components = {
    pre: (props) => {
      const className = props.children.props.className || ""
      const matches = className.match(/language-(?<lang>.*)/)
      return (
        <Highlight
          {...defaultProps}
          code={props.children.props.children.trim()}
          language={
            matches && matches.groups && matches.groups.lang
              ? matches.groups.lang
              : ""
          }
          theme={dracula}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} p-5 rounded shadow overflow-x-auto`}
              style={style}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )
    },
    wrapper: ({ children }) => <>{children}</>,
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="flex flex-col flex-grow">
        <div className="lg:grid lg:grid-cols-3 flex-1">
          <article className="lg:col-start-2">
            <SEO
              title={post.frontmatter.title}
              description={post.frontmatter.description || post.excerpt}
            />
            <h1 className="text-4xl font-extrabold uppercase title text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {post.frontmatter.title}
            </h1>
            <p className="text-xs sub-title">{post.frontmatter.date}</p>
            <article className="my-8 flex flex-col gap-2">
              <MDXProvider components={components}>
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            </article>
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
