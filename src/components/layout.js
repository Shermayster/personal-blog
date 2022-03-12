import React from "react"
import { Link } from "gatsby"
import Bio from "./bio"
import { VscGithubInverted } from "@react-icons/all-files/vsc/VscGithubInverted"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"

const nameStyles =
  "shadow-none text-gray-50 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    const social = (
      <>
        <a
          target="_blank"
          className="shadow-none flex items-center"
          href="https://github.com/Shermayster"
        >
          <VscGithubInverted title="pavel shermayster's github" />
        </a>
        <a
          target="_blank"
          className="shadow-none flex items-center"
          href="https://www.linkedin.com/in/shermpavel/"
        >
          <FaLinkedin title="linkedin" />
        </a>
        <a
          target="_blank"
          className="shadow-none flex items-center"
          href="https://twitter.com/ShermPavel"
        >
          <FaTwitter />
        </a>
      </>
    )
    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <>
          <div>
            <Link className={nameStyles} to={`/`}>
              {title}
            </Link>
          </div>
          <div className="flex gap-4 text-lg shadow-none text-gray-50">
            {social}
          </div>
        </>
      )
    } else {
      header = (
        <>
          <div>
            <Link className={nameStyles} to={`/`}>
              {title}
            </Link>
          </div>
          <div className="flex gap-4 text-lg shadow-none text-gray-50">
            <Link to={`/`} className="shadow-none">
              All Articles
            </Link>
            {social}
          </div>
        </>
      )
    }
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <header className="flex flex-col items-center md:items-start md:flex-row bg-gray-900 text-gray-50 shadow text-lg p-4 px-10 md:align-middle justify-between">
          {header}
        </header>
        <main className="mx-2 my-4 flex-grow flex text-xl">{children}</main>
        <footer className="bg-gray-800 text-gray-100 px-4 flex justify-center">
          <Bio />
        </footer>
      </div>
    )
  }
}

export default Layout
