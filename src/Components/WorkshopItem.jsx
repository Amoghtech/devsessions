import { useParams } from 'react-router';
import styles from "./item.module.css"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import item from "../Assests/item.svg"

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
    marginRight: "70px",
    borderBottom:"2px solid #f4f2f1"
  },
  bord:{
    borderBottom:"1px solid black"

  },
  pos: {
    marginBottom: 12,
  },
});

const WorkshopItem = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const params = useParams();
  return (
    <div >
      <div className={styles.sec}>
        <h2 className={styles.content}>Borowers</h2>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className={`col-md-8 ${styles.left_col}`}>
            <div className="row p-3">
              <h2>Boroows</h2>
              <p className={styles.para}>Build applications, websites, browser extensions, libraries, modules, tools or learning materials that bring web3 or P2P to the web we have today.</p>
              <button type="button" class="btn btn-primary ms-2" style={{width:"150px"}}>Register</button>
            </div>
          </div>
          <div className="col-md-4">
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="" gutterBottom>
                  Session on:12/12/22 <EventIcon style={{ marginLeft: "20px" }} />
                </Typography>
                <div className="mb-3 mt-3">
                <Typography variant="h6" component="h6">
                  Organizer : Sans Group
                </Typography>
                </div>
                <div className="mb-3">
                  <LocalOfferIcon fontSize="small"/><span class="bg-light border rounded">#IOT</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className={`col-md-8 ${styles.contentText}`}>
            Browsers 3000 is a six week virtual event to explore and accelerate the development of web3 in the browser through experimentation, collaboration and challenge prizes.
            Join us as we kick off on Thursday July 8 with a summit featuring speakers from browser vendors and the projects building browser infrastructure for web3 and P2P technologies today. Anticipate six weeks of learning and building, culminating in a show-and-tell demo session and awards ceremony.
            *If you were unable to attend, you can still view the kickoff summit here!      
            Build applications, websites, browser extensions, libraries, modules, tools or learning materials that bring web3 or P2P to the web we have today. Come build the browser of tomorrow, today!
          </div>
          <div className="col-md-4">
            <img src={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopItem;
