import React from "react";
import style from "./a.module.css";
import poster from "../../assets/poster.png";
import ResultCard from "../ResultCard/ResultCard";
import resultBackground from "../../assets/resultBackground.png";

const ResultCardData = [
  {
    title: "Rahul Sharma",
    rank: "JEE AIR rank 2",
    details:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    src: poster,
  },
  {
    title: "Aditya kumar",
    rank: "NEET AIR rank 1",
    details:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    src: poster,
  },
  {
    title: "Sourabh Patil",
    rank: "JEE AIR rank 10",
    details:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    src: poster,
  },
  {
    title: "Ram Kumar",
    rank: "JEE AIR rank 20",
    details:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    src: poster,
  },
];

const HomeResults = () => {
  return (
    <div
      className={style.outerDiv}
      style={{ backgroundImage: `url(${resultBackground})` }}
    >
      <div className={style.headingDiv}>
        <div className={style.line}></div>
        <h1>Results</h1>
        <div className={style.line}></div>
      </div>
      <div className={style.resultCard}>
        {ResultCardData.map((data) => {
          return (
            <ResultCard
              title={data.title}
              details={data.details}
              src={data.src}
              rank={data.rank}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeResults;
