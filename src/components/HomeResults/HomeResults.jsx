import React from "react";
import style from "./a.module.css";
import poster from "../../assets/poster.png";
import ResultCard from "../ResultCard/ResultCard";
import resultBackground from "../../assets/resultBackground.png";

const ResultCardData = [
  {
    title: "Aniket",
    rank: "AIIMS Rank 169*",
    details:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    src: "https://drive.google.com/uc?export=view&id=1x24YynAdoOnOvlK0I004ToTGxrlAZCh2",
  },
  {
    title: "Abhilasha Pravin Dangore",
    rank: "JEE AIR rank 11912",
    details:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      src: "https://drive.google.com/uc?export=view&id=1MFRpNMI6CnHHjvOML2zbYMN5D_eJOSa5",
  },
  {
    title: "Komal Jain",
    rank: "NEET Rank 10800",
    details:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      src: "https://drive.google.com/uc?export=view&id=19g50_LuG8UVLvH9tncw8Yh9kIjb2ZZ6T",
    
  },
  {
    title: "Pranjali Jain",
    rank: "NEET Rank  660*",
    details:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      src: "https://drive.google.com/uc?export=view&id=1WI_iFua-_ZrDQIGBP3wYlHmDHJlE9eNz",
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
