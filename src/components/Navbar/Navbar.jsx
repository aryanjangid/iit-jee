import React, { useEffect, useState } from 'react'
import style from './a.module.css'
import ham from '../../assets/ham.svg'
import cross from '../../assets/cross.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { innerWidth: width } = window
    const [small, setSmall] = useState(false)

    useEffect(() => {
        if (width > 1000) {
            setSmall(false)
        }
        else {
            setSmall(true)
        }
    }, [])

    return (
        <header className={style.navbar}>
            <div className={style.left}>
                <div className={style.logo}>
                    FIM
                </div>
            </div>
            <div className={style.right} style={{ top: `${small ? (open ? '0px' : '-310px') : '0px'}` }}>
                <div className={style.navbar__item} style={{ color: 'black' }}>Home</div>
                <div className={style.navbar__item}>About</div>
                <div className={style.navbar__item}>Courses</div>
                <div className={style.navbar__item}>Blogs</div>
            </div>
            <div className={style.ham} onClick={() => { setOpen(!open); console.log(width); }}>
                {open ? <img src={cross} alt="" /> : <img src={ham} alt="" />}
            </div>
        </header>
    )
}

export default Navbar