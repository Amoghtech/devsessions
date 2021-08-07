import React from 'react'
import "./home.css"
import bg_img from "../img/home_bg.jpg"
const Home = () => {
  return (
    <div>
      <div className="frame">
        <div className="fade"></div>
          <img src={bg_img} alt=""/>
        </div>
    </div>
  )
}

export default Home
