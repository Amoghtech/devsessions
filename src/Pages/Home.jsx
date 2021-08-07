import React from 'react';
import styles from './Home.module.css';
import img2 from "../Assests/img02.svg";
import img3 from "../Assests/img03.svg";
import peerlearningimg from "../Assests/peerlearning.svg";
import productivityimg from "../Assests/productivity.svg";
import codethinkimg from "../Assests/codethink.svg";
const Home = () => {
  return (
    <div className={styles.home}>
      <div class="container-md">
        <div class="row p-2 mt-5">
          <div class="col d-flex justify-content-center  flex-column p-4">
            <h1 className="font-weight-bold">Whats All Happenning Now?</h1>
            <h4 class="text-secondary mt-2">DevSessions have Covered You all!</h4>
            <h5 class="text-secondary ">Stay updated on the all awesome sessions from developers around the world!</h5>
            <h1 style={{ width: '10rem' }}><button type="button" class="btn btn-outline-primary  mt-3 font-weight-bold" >Register!</button></h1>
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
            <h1 style={{ width: '10rem' }}><button type="button" class="btn btn-outline-primary  mt-3 font-weight-bold" >Check out All!</button></h1>
          </div>
        </div>
        <div class="row p-2 mt-5 ">
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
      </div>
    </div>
  );
};

export default Home;
