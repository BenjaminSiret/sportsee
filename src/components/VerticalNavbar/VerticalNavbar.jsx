import React from "react";
import styles from "./VerticalNavbar.module.css";
import Image from "next/image";

export default function VerticalNavbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Image
            src='/assets/yoga.png'
            alt='yoga'
            width={58}
            height={58}
            className={styles.image}
          ></Image>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
