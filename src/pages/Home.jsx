import React from 'react'
import NavBar from '../components/NavBar'
import homestyle from '../styling/home.module.css'

const Home = () => {
  return (
    <>
      <div className={homestyle.main}>
        <NavBar/>
      </div>
    </>
  )
}

export default Home
