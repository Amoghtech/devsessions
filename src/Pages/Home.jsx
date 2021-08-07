import React from 'react';
import styles from './Home.module.css';
import img2 from "../Assests/img02.svg";
import img3 from "../Assests/img03.svg";
import peerlearningimg from "../Assests/peerlearning.svg";
import productivityimg from "../Assests/productivity.svg";
import codethinkimg from "../Assests/codethink.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.home}>
      <div class="container-md">
        <div class="row p-2 mt-5">
          <div class="col d-flex justify-content-center  flex-column p-4">
            <h1 className="font-weight-bold">Whats All Happenning Now?</h1>
            <h4 class="text-secondary mt-2">DevSessions have Covered You all!</h4>
            <h5 class="text-secondary ">Stay updated on the all awesome sessions from developers around the world!</h5>
            <h1 style={{ width: '10rem' }}><Link to="/login"><button type="button" class="btn btn-outline-primary  mt-3 font-weight-bold" >Register!</button></Link></h1>
          </div>
          <div class="col d-flex justify-content-center align-items-center ">
            <img src={img2} alt="" className=" " />
          </div>
        </div>
        <div class="row p-2 mt-5">
          <div class="col d-flex justify-content-center align-items-center ">
            <img src={img3} alt="" className={styles.img3} />
          </div>
          <div class="col d-flex justify-content-center flex-column p-4">
            <h1>Locked At Home?</h1>
            <h5 class="text-secondary mt-2">Learn your favorite skills virtually with digital Sessions that comes straight to your home. Attend a workshop of your choice now!</h5>
            <h1 style={{ width: '10rem' }}><Link to="/workshops"><button type="button" class="btn btn-outline-primary  mt-3 font-weight-bold" >Check out All!</button></Link></h1>
          </div>
        </div>
        <div class="row ">
          <div class="col d-flex justify-content-center align-items-center p-4">
            <h1 class="primary-text-color font-weight-bold">Why attend sessions from developers across the world?</h1>
          </div>
        </div>
        <div class="row p-2">
          <div class="col d-flex justify-content-center align-items-center shadow m-2 border border-light rounded rounded-3" style={{ height: "300px" }}>
            <img src={peerlearningimg} style={{ height: "100px" }} />
          </div>
          <div class="col d-flex justify-content-center align-items-center shadow m-2 border border-light rounded rounded-3" style={{ height: "300px" }}>
            <img src={codethinkimg} alt="" style={{ height: "120px" }} />
          </div>
          <div class="col d-flex justify-content-center align-items-center shadow m-2 border border-light rounded rounded-3" style={{ height: "300px" }}>
            <img src={productivityimg} alt="" style={{ height: "160px" }} />
          </div>
        </div>
        <div class="row ">
          <div class="col d-flex justify-content-center align-items-center p-3 ">
            <h4 class="light-primary-color  rounded shadow  px-3 py-2">Enhance Peer Learning</h4>
          </div>
          <div class="col d-flex justify-content-center align-items-center ">
            <h4 class="light-primary-color  rounded shadow  px-3 py-2">Experienced Tracks</h4>
          </div>
          <div class="col d-flex justify-content-center align-items-center ">
            <h4 class="light-primary-color  rounded shadow  px-3 py-2">Focused skills acquire</h4>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L120,234.7C240,213,480,171,720,160C960,149,1200,171,1320,181.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
  );
};

export default Home;
