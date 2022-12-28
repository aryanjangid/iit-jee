import React, { useEffect, useRef } from "react";
import style from "./a.module.css";
import poster from "../../assets/poster.png";
import ResultCard from "../ResultCard/ResultCard";
import "./homeBulleton.css";
const data = {
  title: "Rahul Sharma",
  rank: "JEE AIR rank 2",
  details:
    "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  src: poster,
};

const HomeBulleton = () => {
  return (
    <div className={style.HomeBulleton}>
      <div className={style.container}>
        <div>
            <h1>FIM Bulletin</h1>
          <div id="scroll-container">
            <div id="scroll-text">
              This is scrolling text.<br></br>
              This is scrolling text.<br></br>
              This is scrolling text.<br></br>
              This is scrolling text.<br></br>
              This is scrolling text.<br></br>
              This is scrolling text.<br></br>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <ResultCard
            title={data.title}
            rank={data.rank}
            details={data.details}
            src={data.src}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBulleton;
