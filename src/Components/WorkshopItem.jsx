import { useParams } from 'react-router';
import styles from './item.module.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import item from '../Assests/item.svg';
import { useState, useEffect } from 'react';
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

const WorkshopItem =  (workshopid) => {
  const [data, setdata] = useState(null);
  const params = useParams();
  console.log('params ',params.sessionId)
  useEffect(() => {
    const getsingle = async (quoteId) => {
      const res = await fetch(
        `https://robohacks-e41e8-default-rtdb.firebaseio.com/workshops/${params.sessionId}.json`
      );
      console.log("res: ",res)
      const data = await res.json();
      console.log("data:",data)
      if (!res.ok) {
        throw new Error(data.message || 'Could not fetch quotes');
      }

      const loadedquote = {
        id: quoteId,
        ...data,
      };

      return loadedquote;
    };

    getsingle(workshopid)
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  }, []);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  return (
    <div>
      <div className={styles.sec}>
        <h2 className={styles.content}>Borowers</h2>
      </div>
      <div className='container'>
        <div className='row my-3'>
          <div className={`col-md-8 ${styles.left_col}`}>
            <div className='row p-3'>
              <h2>{data.name.value}</h2>
              <p className={styles.para}>{data.shortdesc.value}</p>
              <button
                type='button'
                class='btn btn-primary ms-2'
                style={{ width: '150px' }}
              >
                Register
              </button>
            </div>
          </div>
          <div className='col-md-4'>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color='' gutterBottom>
                  Session on:{data.date}{' '}
                  <EventIcon style={{ marginLeft: '20px' }} />
                </Typography>
                <div className='mb-3 mt-3'>
                  <Typography variant='h6' component='h6'>
                    Organizer : {data.nameorg.value}
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
            {data.longdesc.value}
          </div>
          <div className='col-md-4'>
            <img src={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopItem;
