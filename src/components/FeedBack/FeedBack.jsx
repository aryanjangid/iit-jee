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
        'The teachers are really well qualified.The material provided is more than sufficient to achieve the success and score good ranks. Fim provides a very healthy and learning environment to study in the fim premises. The intensity of conduction of test are really good and it helped alot to learn it mistakes done in mock tests.Teachers are really very friendly and try to give individual attention to each and every student in the room. ',
        'Fim made sure I get whatever was most important for me to crack the exam at the best possible time. Personal attention, regular tests and stunning faculty made everything a smooth and enjoyable experience. I enjoyed my time at Fim and never felt like I was preparing for something.',
        'There are only three requirements to do great in any competitive exam :- 1. Getting concepts clear 2. Solving different types of questions3. Self study. In fim you will get every point covered. Your concepts will be cleared, you will have a good approach for every question and you will have enough time for self study.',
        'Perfect place for neet and jee preparation as every subject is covered under one roof. Ideal place for people who whose home are far located since you can stay here all day and study..plus the test series you get here makes you confident enough for the main exam..and the teachers are so helpful to clear your every single doubt..top of all they provide you with every facility they promise about...',
        'One of the Best Educational Institute in Nagpur. Well Experienced Teachers and their teaching method, also they are providing not only quantity but also Quality study material. Facilities Provided here are Very Excellent. ',
        'One of the best tuitions for competitive exams. Even during the lockdown, they didn not fail to deliver and taught all topics perfectly. The faculty is very experienced and has a connect with the students. ',
        'A Very good coaching with experienced faculties, regular study discussion, regular tests , carrier guidance, latest updates in study material, gives attention to every single student'
    ]
    const slides = [
        <Slide stars={5} feedback={feedbacks[0]} name={'Kiran Jagdish Katole'} occupation={'Shri vasantrao naik goverment medical clg,yavatmal'} />,
        <Slide stars={4} feedback={feedbacks[1]} name={'Atharva Thorkar'} occupation={'IIT Kharagpur'} />,
        <Slide stars={4} feedback={feedbacks[2]} name={'Anay Arjune '} occupation={'Gmc Nagpur'} />,
        <Slide stars={5} feedback={feedbacks[3]} name={'PranjaliJain '} occupation={'Government Medical College Nagpur '} />,
        <Slide stars={5} feedback={feedbacks[4]} name={'Shalom Vitesh Sonekar'} occupation={'Priyadarshini Bhagwati College of Engineering '} />,
        <Slide stars={5} feedback={feedbacks[5]} name={'TM Satvik Pillay '} occupation={'VNIT Nagpur'} />,
        <Slide stars={5} feedback={feedbacks[6]} name={'Aniket '} occupation={'AIIMS Nagpur'} />
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