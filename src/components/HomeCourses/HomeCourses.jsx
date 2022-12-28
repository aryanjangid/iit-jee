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
    subHeading:'Click here to know more about our JEE courses',
    src:course1img,
    color:'#198ED2'
  },
  {
    heading:'NEET',
    subHeading:'Click here to know more about our NEET courses',
    src:course2img,
    color:'#7B167D'
  },
  {
    heading:'Foundation',
    subHeading:'Click here to know more about our Foundation courses',
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
          <p>FIM is committed to providing the best possible education and support for students preparing for the IIT JEE and NEET exams. Our courses are designed and taught by experienced professionals with a track record of success, and are tailored to meet the unique needs and goals of each individual student. We offer a wide range of study materials and resources, including comprehensive study guides, practice tests, and one-on-one tutoring sessions, to ensure that our students have everything they need to succeed.</p>
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
