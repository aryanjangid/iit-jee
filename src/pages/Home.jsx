import React, { useState } from "react";
import FeedBack from "../components/FeedBack/FeedBack";
import HomeBulleton from "../components/HomeBulleton/HomeBulleton";
import HomeCourses from "../components/HomeCourses/HomeCourses";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeResults from "../components/HomeResults/HomeResults";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import admission from "../assets/admi.jpeg";
import style from "./a.module.css";
import Modal from "../components/Modal/Modal";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClicked = () => {
    setShow(!show);
    console.log(show);
  };

  const AdmissionForm = () => {
    return (
      <div className={style.admissionForm}>
        <div>
          <img src={admission} className={style.admissionPoster}></img>
        </div>
        <div className={style.form}>
          <p>Name</p>
          <input className={style.input} placeholder="name"></input>
          <p>Standard</p>
          <input className={style.input} placeholder="Standard"></input>
          <p>City</p>
          <input className={style.input} placeholder="city"></input>
          <p>Contact No</p>
          <input className={style.input} placeholder="contact number"></input>
          <p>Course Interested</p>
          <input
            className={style.input}
            placeholder="course interested"
          ></input>
        </div>
        <div className={style.submit}>Submit</div>
      </div>
    );
  };

  return (
    <>
      <div className={style.enquiry} onClick={handleClicked}>
        Admission Enquiry Form
      </div>
      <div className={style.chat}>
        <h1>Chat</h1>
      </div>
      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <AdmissionForm />
      </Modal>
      <HomeHero />
      <HomeBulleton />
      <HomeCourses />
      <HomeResults />
      <FeedBack />
      <Footer />
    </>
  );
};

export default Home;
