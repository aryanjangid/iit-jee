import React, { useState } from 'react'
import style from './a.module.css'
import ham from '../../assets/ham.svg'
import fullstar from '../../assets/fullstar.svg'
import halfstar from '../../assets/halfstar.svg'
import emptystar from '../../assets/emptystar.svg'
import btn from '../../assets/bluebutton.svg'
import quote from '../../assets/quote.svg'

const Slide = ({ stars, feedback, name, occupation }) => {
    const returnStars = () => {
        const filledStars = Array.from({ length: Math.floor(stars) }, (v, i) => i)
        const halfStars = Array.from({ length: Math.ceil(stars - filledStars.length) }, (v, i) => i)
        const emptyStars = Array.from({ length: 5 - (halfStars.length + filledStars.length) }, (v, i) => i)
        return (
            <div className={style.stars}>
                {filledStars.map((star, index) => (<img src={fullstar} alt={'full star'} className={style.star} key={`${index}full`} />))}
                {halfStars.map((star, index) => (<img src={halfstar} style={{ top: '-3px', left: '2px', transform: 'scale(1.03)' }} alt={'half star'} className={style.star} key={`${index}half`} />))}
                {emptyStars.map((star, index) => (<img src={emptystar} alt={'empty star'} className={style.star} key={`${index}empty`} />))}
            </div>
        )
    }
    return (
        <div className={style.slide}>
            <img src={quote} className={style.quote} alt='' />
            {returnStars()}
            <div className={style.content}>
                <div className={style.feedbackContent}>{feedback}</div>
            </div>
            <div className={style.author}>
                <img src={fullstar} alt="star" />
                <div className={style.info}>
                    <h3 className={style.name}>{name}</h3>
                    <h3 className={style.occupation}>{occupation}</h3>
                </div>
            </div>
        </div>
    )
}

const FeedBack = () => {
    const feedbacks = [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptate quam quia deserunt tenetur aliquid cumque quasi fugiat. Cum suscipit iusto exercitationem unde incidunt provident illum quod maiores maxime cumque?'
    ]
    const slides = [
        <Slide stars={3.7} feedback={feedbacks[0]} name={'Awlad Hosain1'} occupation={'UI Designer'} />,
        <Slide stars={4.7} feedback={feedbacks[0]} name={'Shanta Aktar1'} occupation={'Graphic Designer'} />,
        <Slide stars={4.7} feedback={feedbacks[0]} name={'Shanta Aktar2'} occupation={'Graphic Designer'} />,
        <Slide stars={3.7} feedback={feedbacks[0]} name={'Awlad Hosain2'} occupation={'UI Designer'} />
    ]
    const [leftIndex, setLeftIndex] = useState(0)
    const [rightIndex, setRightIndex] = useState(1)

    const handlePrevious = () => {
        if (leftIndex === 0) {
            setLeftIndex(slides.length - 1);
            setRightIndex(0)
            return
        }
        if (rightIndex === 0 && leftIndex === slides.length - 1) {
            setLeftIndex(slides.length - 2);
            setRightIndex(slides.length - 1);
            return
        }
        setLeftIndex((leftIndex - 1))
        setRightIndex((rightIndex - 1))
    }
    const handleNext = () => {
        setLeftIndex((leftIndex + 1) % slides.length)
        setRightIndex((rightIndex + 1) % slides.length)
    }

    return (
        <div className={style.feedback}>
            <div className={style.title}>
                Feedbacks
            </div>
            <div className={style.slider}>
                {slides[leftIndex]}
                {slides[rightIndex]}
                <img src={btn} className={style.prev} alt='' onClick={handlePrevious} />
                <img src={btn} className={style.next} alt='' onClick={handleNext} />
            </div>
            <div className={style.smallSlider}>
                {slides[leftIndex]}
                <img src={btn} className={style.prev} alt='' onClick={handlePrevious} />
                <img src={btn} className={style.next} alt='' onClick={handleNext} />
            </div>
        </div>
    )
}

export default FeedBack