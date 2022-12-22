import React from "react";
import style from "./a.module.css";
import footer from "../../assets/footer.png";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={style.outerDiv}>
      <div className={style.contentDiv}>
        <div className={style.compInfo}>
          <div className={style.compTitles}>
            <img src={logo} alt="" className={style.footer} />
            <h1>FIM</h1>
          </div>
          <h5>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </h5>
        </div>
        <div className={style.menuDiv}>
          <h2>Menu</h2>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Course</h3>
          <h3>Blog</h3>
        </div>
        <div className={style.contactDiv}>
          <h2>Contact Us</h2>
          <div className={style.icons}>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
          </div>
        </div>
      </div>
      <div className={style.endDiv}>
        <div className={style.line}></div>
        <p>Copyright ©2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;