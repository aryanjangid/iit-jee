import React from 'react'
import style from './a.module.css'
import chat from '../../assets/chat.png'
import larki from '../../assets/larki.png'
import Navbar from '../Navbar/Navbar'

const HomeHero = () => {
  return (
    <div className={style.homeHero}>
      <Navbar />
      <div className={style.content}>
        <div className={style.left}>
          <h1 className={style.title}>
            HERO TEXT LOREM EPSUM
          </h1>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius accumsan arcu sit amet ornare. Maecenas vel dui nec diam luctus mollis. Aliquam sed nulla ut sapien bibendum bibendum.
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
      <div className={style.enquiry}>
        Admission Enquiry Form
      </div>
      <div className={style.chat}>
        <h1>Chat</h1>
      </div>
    </div>
  )
}

export default HomeHero