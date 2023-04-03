import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        src='/logo.png'
        alt='logo'
        width={58}
        height={58}
        className={styles.logo}
      ></Image>
      <Image
        src='/logo-text.png'
        alt='logo-text'
        width={110}
        height={25}
      ></Image>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link
              href='/'
              className={styles.navLink}
            >
              {" "}
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className={styles.navLink}
            >
              {" "}
              Profil
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className={styles.navLink}
            >
              {" "}
              Réglages
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className={styles.navLink}
            >
              {" "}
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
