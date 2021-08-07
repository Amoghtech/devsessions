import React from 'react';
import styles from './Workshopcard.module.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EventIcon from '@material-ui/icons/Event';
const WorkshopCard = (props) => {
  return (
    <div>
      <div className='container shadow p-4 my-3'>
        <div className='row '>
          <div className='col-md-2 col-xs-2 d-flex justify-content-center  '>
            <img
              className={styles.img_size}
              src='https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/562/639/datas/medium.png'
              alt='not found'
            />
          </div>
          <div className='col-md-7'>
            <div className='row'>
              <h3>{props.name}</h3>
            </div>
            <p className={styles.desc}>{props.shortdesc}</p>
            <div className='row '>
              <p>
                <span className='part_icon '>
                  <SupervisorAccountIcon />
                </span>
                <span className={`${styles.part_span} ms-2`}>23</span>{' '}
                <span className={`${styles.part_span2} ms-2`}>
                  participants
                </span>{' '}
              </p>
            </div>
          </div>
          <div className='col-md-3 right'>
            <div className='cal mb-2'>
              {' '}
              <EventIcon fontSize='small' />
              <span className='ms-3'>{props.date}</span>
            </div>
            <div className='tag'>
              <LocalOfferIcon fontSize='small' />
              <span className='ms-3'>
                <button class='bg-light border rounded'>#IOT</button>
              </span>
            </div>
            <div class='mt-4 '>
              <button class='text-white border rounded py-2 px-4 dark-primary-color  '>
                {' '}
                <h6 class='m-0'>Register</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
