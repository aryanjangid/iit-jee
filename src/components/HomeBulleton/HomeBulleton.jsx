import React from 'react'
import style from './a.module.css'
import strip from '../../assets/strip.png'
import rectangle from '../../assets/Rectangle.png'

const HomeBulleton = () => {
    return (
        <div className={style.HomeBulleton}>
            <div className={style.left}>
                <div className="">
                    <img className={style.first} src={strip} alt="" />
                </div>
                <div className="">
                    <img src={strip} alt="" />
                </div>
                <div className="">
                    <img src={strip} alt="" />
                </div>
                <div className="">
                    <img src={strip} alt="" />
                </div>
                <div className="">
                    <img src={strip} alt="" />
                </div>
            </div>
            <div className={style.right}>
                <img src={rectangle} alt="" />
                <div className={style.content}>
                    <h1>FIM Bulletin</h1>
                </div>
            </div>
        </div>
    )
}

export default HomeBulleton