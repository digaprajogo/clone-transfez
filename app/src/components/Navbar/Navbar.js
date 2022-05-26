import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img
          className={styles.leftNavbar}
          src="assets/svg/Transfez.svg"
          alt="Transfez"
          width="184px"
        />
        <button className={`${styles.personalButton} ${styles.gothamMedium}`}>PERSONAL</button>
        <button className={`${styles.bisnisButton} ${styles.gothamMedium}`}>BISNIS</button>
        <div className={styles.rightNavbar}>
          <div className={`${styles.gothamMedium} ${styles.navbarRightText} ${styles.pointer}`}>
            HUBUNGI SALES
          </div>
          <div className={`${styles.pointer} ${styles.iconGlobe}`}>
            <i className="fa-solid fa-globe"></i>
          </div>
          <div className={`${styles.pointer} ${styles.iconDown}`}>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <button className={`${styles.signInButton} ${styles.gothamMedium}`}>SIGN IN</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
