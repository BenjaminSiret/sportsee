import React from "react";
import Header from "../Header/Header";
import VerticalNavbar from "../VerticalNavbar/VerticalNavbar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <VerticalNavbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
