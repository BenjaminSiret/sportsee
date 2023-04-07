import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import VerticalNavbar from "../VerticalNavbar/VerticalNavbar"
import styles from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <VerticalNavbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
}

export default Layout
