import React from "react";
import style from "./a.module.css";

const CoursesCard = (props) => {
  return (
    <>
    <div className={style.outerCardDiv}>
        <div className={style.contentDiv}>
          <div>
            <img src={props.src} alt="" className={style.courses} />
          </div>
          <div>
            <h2 style={{ color: `${props.color}` }}>{props.heading}</h2>
            <h4>{props.subHeading}</h4>
          </div>
        </div>
      <div className={style.hoverCard}>
      </div>
    </div>
    </>
  );
};

export default CoursesCard;
