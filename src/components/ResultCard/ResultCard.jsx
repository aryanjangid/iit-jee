import React from "react";
import style from "./a.module.css";

const ResultCard = (props) => {
  return (
    <div className={style.outerDiv}>
      <div className={style.imgDiv}>
        <img src={props.src} alt="poster"></img>
      </div>
      <div className={style.detials}>
        <h1>{props.title}</h1>
        <p>{props.rank}</p>
        {/* <h5 className={style.description}>{props.details}</h5> */}
        {/* <div className={style.viewMoreButton}>
            <h4 >{viewMore}</h4>
        </div> */}
      </div>
    </div>
  );
};

export default ResultCard;
