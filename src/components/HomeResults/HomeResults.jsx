import React from 'react'
import style from './a.module.css'
import poster from '../../assets/poster.png'
import ResultCard from '../ResultCard/ResultCard'
import resultBackground from '../../assets/resultBackground.png'

const ResultCardData = [
  {
    title:'IIT-JEE',
    details:'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    src:poster,
  },
  {
    title:'IIT-JEE',
    details:'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    src:poster,
  },
  {
    title:'IIT-JEE',
    details:'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    src:poster,
  },
  {
    title:'IIT-JEE',
    details:'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    src:poster,
  },
  
]

const HomeResults = () => {

  return (
    <div className={style.outerDiv} style={{backgroundImage: `url(${resultBackground})`,}}>
      <div className={style.headingDiv}>
          <div className={style.line}></div>
          <h1>
            Results
          </h1>
          <div className={style.line}></div>
      </div>
      <div className={style.resultCard}>
        {ResultCardData.map((data)=>{
          return(
          <ResultCard title={data.title} details={data.details} src={data.src}/>
          )
        })}
      </div>
    </div>
  )
}

export default HomeResults