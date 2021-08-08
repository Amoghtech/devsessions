import React from 'react';
import { useParams } from 'react-router';
import styles from './item.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsingleworkshop } from '../redux/workshop-actions';
import { makeStyles } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import item from '../Assests/item.svg';
import LoadingSpinner from './Loading';
import { uwsliceactions } from '../redux/userworkshop';
import { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginRight: '70px',
    borderBottom: '2px solid #f4f2f1',
  },
  bord: {
    borderBottom: '1px solid black',
  },
  pos: {
    marginBottom: 12,
  },
});

const WorkshopItem = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const data = useSelector((state) => state.single);
  const ui = useSelector((state) => state.ui);
  const [button, setbutton] = useState(false);
  const [Snackbarstate, setsnackbarstate] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    Transition: Fade,
  });
  const params = useParams();
  console.log('params ', params.sessionId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchsingleworkshop(params.sessionId));
  }, [fetchsingleworkshop]);


  const handleClose = () => {
    setsnackbarstate({ ...Snackbarstate, open: false });
  };
  const clickhandler = () => {
    setbutton(true);
    setsnackbarstate({ open: true });
    dispatch(
      uwsliceactions.add({
        name: data.data.name,
        nameorg: data.data.nameorg,
        longdesc: data.data.longdesc,
        shortdesc: data.data.shortdesc,
        date: data.data.date,
        tag:data.data.tag
      })
    );
  };
  return (
    <div>
      {(ui.notification !== null && ui.notification.status === 'SENDING') ||
        data.data === null ? (
        <div class='row mt-3 d-flex align-item-center justify-content-center'>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className={styles.sec}>
            <h2 className={styles.content}>{data.data.name}</h2>
          </div>
          <div className='container'>
            <div className='row my-3'>
              <div className={`col-md-8 ${styles.left_col}`}>
                <div className='row p-3'>
                  <h2>{data.data.name}</h2>
                  <p className={styles.para}>{data.data.shortdesc}</p>
                  <button
                    type='button'
                    class={`tn btn-primary ms-2`}
                    style={{ width: '150px' }}
                    onClick={clickhandler}
                    disabled={button}
                  >
                    {button ? 'Registered' : ' Register'}
                  </button>
                </div>
              </div>
              <div className='col-md-4'>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography className={classes.title} color='' gutterBottom>
                      Session on:{data.data.date}{' '}
                      <EventIcon style={{ marginLeft: '20px' }} />
                    </Typography>
                    <div className='mb-3 mt-3'>
                      <Typography variant='h6' component='h6'>
                        Organizer : {data.data.nameorg}
                      </Typography>
                    </div>
                    <div className='mb-3'>
                      <LocalOfferIcon fontSize='small' />
                      <span class='bg-light border rounded'>{data.data.tag}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className='container mt-3'>
            <div className='row'>
              <div className={`col-md-8 ${styles.contentText}`}>
                <div className="row">
                  <div className={styles.longDesc}>{data.data.longdesc} </div>
                </div>
                  <div className="row mt-3">
                    <h3 className="mb-4"><u>Topics to be covered </u></h3>
                    
                    <ul className="ms-3">
                      <li>Understand Machine Learning and Python</li>
                      <li>Knowledge on the Python language</li>
                      <li>Understand the use of 'Python' in the industry</li>
                      <li>Install Python and the packages useful for the course</li>
                    </ul>
                </div>
                  <div className="row mt-3">
                    <h3 className="mb-4"><u>Takeaways</u></h3>
                    <h4>Introduction to Machine Learning</h4>
                    <ol className="ms-3">
                      <li>Certificate of Merit for all the workshop participants.</li>
                      <li> At the end of this workshop, a small competition will be organized among the participating students and winners will be awarded with a <b>'Certificate of Excellence'</b>.</li>
                      <li>About the advantages of the TestProject Python OpenSDK and the TestProject Agent in setting up and maintaining reporting and driver configuration</li>
                      <li> Know how to customize the reporting created by the OpenSDK</li>
                    </ol>
                </div>
                  
              </div>
              <div className='col-md-4'>
                  <img src={item} className={styles.rt_img}/>
              </div>
            </div>
          </div>
          {/* popup */}
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={Snackbarstate.open}
            onClose={handleClose}
            autoHideDuration={2000}
            TransitionComponent={Snackbarstate.Transition}
            message="You are now Registered for the session!"
            key={Snackbarstate.vertical + Snackbarstate.horizontal}

          />
        </>
      )}
    </div>
  );
};

export default WorkshopItem;
