import React from 'react'
import Nav_Bar from '../components/Nav_Bar'
import homestyle from '../styling/home.module.css'

const Home = () => {
  return (
    <>
      <div className={homestyle.main}>
        <Nav_Bar/>
      </div>
    </>
  )
}

export default Home
