import React from "react";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <h1>Layout</h1>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
