import React from 'react';
import styles from './workshops.module.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EventIcon from '@material-ui/icons/Event';
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';
import { fetchworkshop } from '../redux/workshop-actions';
import { useSelector } from 'react-redux';

const WorkshopCard = () => {
  const workshop = useSelector((state) => stata.workshops);

  useEffect(() => {
    fetchworkshop();
  }, [fetchworkshop]);

  return (
    <div>
      <div className='container card p-3 my-3'>
        <div className='row '>
          <div className='col-md-2 col-xs-2'>
            <img
              className={styles.img_size}
              src='https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/562/639/datas/medium.png'
              alt='not found'
            />
          </div>
          <div className='col-md-7'>
            <div className='row'>
              <h3>Robo Hacks</h3>
            </div>
            <p className={styles.desc}>
              Robo Hacks is wolrds best hackathon Robo Hacks is wolrds best
              hackathon{' '}
            </p>
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
              <span className='ms-3'>12-08-21</span>
            </div>
            <div className='tag'>
              {' '}
              <LocalOfferIcon fontSize='small' />
              <span className='ms-3'>
                <Button variant='outlined' size='small' color='primary'>
                  IOT
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Workshops = () => {
  return (
    <>
      <h1>Workshop</h1>
      <WorkshopCard />
      <WorkshopCard />
    </>
  );
};

export default Workshops;
