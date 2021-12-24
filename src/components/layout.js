import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Bio from "./bio"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1>
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link className="shadow-none" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <header className=" bg-indigo-800 text-emerald-100 p-4 flex justify-center">
          {header}
        </header>
        <main className="mx-2 md:mx-32 my-4 ">{children}</main>
        <footer className=" bg-indigo-800 text-emerald-100 px-4 flex justify-center">
          <Bio />
        </footer>
      </div>
    )
  }
}

export default Layout
