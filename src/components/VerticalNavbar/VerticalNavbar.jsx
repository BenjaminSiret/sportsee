import React from "react";
import styles from "./VerticalNavbar.module.css";
import Image from "next/image";

export default function VerticalNavbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.navItem}>
          <Image
            src='/assets/yoga.png'
            alt='yoga'
            width={32}
            height={32}
            className={styles.image}
          ></Image>
        </li>
        <li className={styles.navItem}>
          <Image
            src='/assets/swim.png'
            alt='swim'
            width={32}
            height={32}
            className={styles.image}
          ></Image>
        </li>
        <li className={styles.navItem}>
          <Image
            src='/assets/bike.png'
            alt='bike'
            width={32}
            height={32}
            className={styles.image}
          ></Image>
        </li>
        <li className={styles.navItem}>
          <Image
            src='/assets/dumbbells.png'
            alt='dumbbells'
            width={32}
            height={32}
            className={styles.image}
          ></Image>
        </li>
      </ul>
      <p className={styles.copyright}>Copyright, SportSee 2020</p>
    </div>
  );
}
