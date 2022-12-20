import React from 'react'
import style from './a.module.css'
import feedback from '../../assets/feedback.png'

const FeedBack = () => {
    return (
        <img src={feedback} alt="" className={style.feedback} />
    )
}

export default FeedBack