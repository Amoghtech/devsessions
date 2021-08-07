import React from 'react';
import { Link } from 'react-router-dom';
import login from '../Assests/login.svg';
import styles from './Login.module.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { authsliceactions } from '../redux/auth';
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
const LoginComp = () => {
  const [error, seterror] = useState(false);
  const dispatch = useDispatch();
  const emailref = useRef();
  const history = useHistory();
  const passwordref = useRef();
  const usernameref = useRef();
  const submithandler = () => {
    if (
      !emailref.current.value.includes('@') ||
      !passwordref.current.value.length > 3
    ) {
      seterror(true);
      return;
    }
    seterror(false);
    dispatch(authsliceactions.loginparticipant());
    history.push('/');
  };
  // navss
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    
      <div className='container'>
        <div class='row p-2 mt-5'>
          <div class='col mt-5'>
            <img src={login} alt='' className=' ' style={{ width: '85%',height:"300px" }} />
          </div>
          <div className='col mt-n-3'>
            <div className='row'>
              <h2 className={styles.bord_bottom}>Login</h2>
            </div>

            <div className={styles.error}>
              {error && 'You must enter all fields'}
            </div>
            <div className={`${styles.entry} row`}>
              <div className='col-sm-1'>
                <MailOutlineIcon />
              </div>
              <div className='col-sm-11'>
                <input
                  ref={emailref}
                  type='email'
                  placeholder='Enter email id'
                />
              </div>
              <div className={`${styles.entry} row`}>
                <div className='col-sm-1'>
                  <VpnKeyIcon />
                </div>
                <div className='col-sm-11'>
                  <input
                    type='password'
                    ref={passwordref}
                    placeholder='Enter password'
                  />
                </div>
              </div>
              <div className={`${styles.entry}  row`}>
                <button
                  onClick={submithandler}
                  type='button'
                  class='btn btn-primary'
                >
                  Login
                </button>
              </div>
            {/* signup component */}
            <TabPanel value={value} index={1}>
              <div className={`${styles.entry} row`}>
                <div className='col-sm-1'>
                  <PersonIcon />
                </div>
                <div className='col-sm-11'>
                  <input
                    ref={usernameref}
                    type='text'
                    placeholder='Enter your name'
                  />
                </div>
              </div>
              <div className={`${styles.entry} row`}>
                <div className='col-sm-1'>
                  <MailOutlineIcon />
                </div>
                <div className='col-sm-11'>
                  <input
                    ref={emailref}
                    type='email'
                    placeholder='Enter email id'
                  />
                </div>
              </div>
              <div className={`${styles.entry} row`}>
                <div className='col-sm-1'>
                  <VpnKeyIcon />
                </div>
                <div className='col-sm-11'>
                  <input
                    type='password'
                    ref={passwordref}
                    placeholder='Enter password'
                  />
                </div>
              </div>
              <div className={`${styles.entry}  row`}>
                <button
                  onClick={submithandler}
                  type='button'
                  class='btn btn-primary'
                >
                  Sign Up
                </button>
              </div>
            </TabPanel>

            {/* <div className={styles.bot_text}>
                            <span className="text ">DON'T HAVE AN ACCOUNT?</span> <span><Link to="/register"> Sign Up</Link></span>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
