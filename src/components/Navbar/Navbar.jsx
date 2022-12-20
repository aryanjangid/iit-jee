import React from 'react'
import style from './a.module.css'

const Navbar = () => {
    return (
        <header className={style.navbar}>
            <div className={style.left}>
                <div className={style.logo}>
                    FIM
                </div>
            </div>
            <div className={style.right}>
                <div className={style.navbar__item} style={{ color: 'black' }}>Home</div>
                <div className={style.navbar__item}>About</div>
                <div className={style.navbar__item}>Courses</div>
                <div className={style.navbar__item}>Blogs</div>
            </div>
        </header>
    )
}

export default Navbar