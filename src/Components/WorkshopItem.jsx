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
                      <span class='bg-light border rounded'>#IOT</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className='container mt-5'>
            <div className='row'>
              <div className={`col-md-8 ${styles.contentText}`}>
                {data.data.longdesc}
              </div>
              <div className='col-md-4'>
                <img src={item} />
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
