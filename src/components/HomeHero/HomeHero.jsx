import React, { useState } from "react";
import style from "./a.module.css";
import chat from "../../assets/chat.png";
import larki from "../../assets/larki.svg";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal.js";
import admission from "../../assets/admi.jpeg";

const HomeHero = () => {
  return (
    <>
      <div className={style.homeHero}>
        <Navbar />
        <div className={style.content}>
          <div className={style.left}>
            <h1 className={style.title}>Achieve success, one step at a time</h1>
            <p className={style.text}>
            Transform your dreams of getting into a top engineering or medical college <br></br>
            into a reality with our comprehensive coaching program. Take control of your future and reach for the stars!
            </p>
            <div className={style.button}>
              <button className={style.button_search}>Search</button>
              <button className={style.button_python}>Python</button>
            </div>
          </div>
          <div className={style.right}>
            <img src={larki} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
