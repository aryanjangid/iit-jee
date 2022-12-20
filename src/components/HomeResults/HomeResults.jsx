import React from 'react'
import style from './a.module.css'
import results from '../../assets/results.png'

const HomeResults = () => {
  return (
    <img src={results} alt="" className={style.results} />
  )
}

export default HomeResults