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

const LoginComp = () => {
  const [error, seterror] = useState(false);
  const dispatch = useDispatch();
  const emailref = useRef();
  const history = useHistory();
  const passwordref = useRef();
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
  return (
    <div>
      <div className='container'>
        <div class='row p-2 mt-5'>
          <div class='col d-flex align-items-center '>
            <img src={login} alt='' className=' ' style={{ width: '85%' }} />
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
