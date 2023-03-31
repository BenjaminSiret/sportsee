import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <header>Header</header>
      <h1>Layout</h1>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
