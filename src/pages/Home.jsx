import React from 'react'
import FeedBack from '../components/FeedBack/FeedBack'
import HomeBulleton from '../components/HomeBulleton/HomeBulleton'
import HomeCourses from '../components/HomeCourses/HomeCourses'
import HomeHero from '../components/HomeHero/HomeHero'
import HomeResults from '../components/HomeResults/HomeResults'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeBulleton />
      <HomeCourses />
      <HomeResults />
      <FeedBack />
      <Footer />
    </>
  )
}

export default Home