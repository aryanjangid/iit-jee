import React from 'react'
import style from './a.module.css'
import courses from '../../assets/courses.png'

const HomeCourses = () => {
  return (
    <img src={courses} alt="" className={style.courses} />
  )
}

export default HomeCourses