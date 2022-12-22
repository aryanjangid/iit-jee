import React from "react";
import style from "./a.module.css";
import courses from "../../assets/courses.png";
import course1img from "../../assets/c2.svg";
import course2img from "../../assets/c1.svg";
import course3img from "../../assets/c3.svg";
import CoursesCard from "../CoursesCard/CoursesCard";

const courseData = [
  {
    heading:'JEE',
    subHeading:'This is a great way to create great slogans for business Focus',
    src:course1img,
    color:'#198ED2'
  },
  {
    heading:'NEET',
    subHeading:'This is a great way to create great slogans for business Focus',
    src:course2img,
    color:'#7B167D'
  },
  {
    heading:'UPSC',
    subHeading:'This is a great way to create great slogans for business Focus',
    src:course3img,
    color:'#007628'
  }
]
const HomeCourses = () => {
  return (
    <div className={style.outerDiv}>
      <div className={style.contentDiv}>
        <div className={style.headingDiv}>
          <div className={style.line}></div>
          <h1>
            All Courses
          </h1>
          <div className={style.line}></div>
        </div>
        <div className={style.subHeading}>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
        <div className={style.coursesCard}>
          {courseData.map((value)=>{
            return(
                <CoursesCard heading={value.heading} subHeading={value.subHeading} src={value.src} color={value.color}/>
              )
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCourses;
