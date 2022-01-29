import React from "react"
import { Link } from "gatsby"
import Bio from "./bio"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <>
          <h1>
            <Link className="shadow-none" to={`/`}>
              {title}
            </Link>
          </h1>
          <div>
            <a target="_blank" href="https://github.com/Shermayster">
              github
            </a>
          </div>
        </>
      )
    } else {
      header = (
        <>
          <h3>
            <Link className="shadow-none" to={`/`}>
              {title}
            </Link>
          </h3>
          <div>
            <Link to={`/`} className="shadow-none">
              Articles
            </Link>
            <a target="_blank" href="https://github.com/Shermayster">
              github
            </a>
          </div>
        </>
      )
    }
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <header className="flex bg-gray-50 shadow text-lg p-4 align-middle justify-between">
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
