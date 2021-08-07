import React from 'react';
import WorkshopCard from '../Components/Workshopcard';
import { fetchworkshop } from '../redux/workshop-actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../Components/Loading';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

const Workshops = () => {
  const dispatch = useDispatch();
  const workshop = useSelector((state) => state.workshops);
  const ui = useSelector((state) => state.ui);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    Transition: Fade,
  });
  useEffect(() => {
    dispatch(fetchworkshop());
  }, [fetchworkshop]);
  const handleClick = () => () => {
    setState({ open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div class='container-md px-5 py-4'>
      <div class='row '>
        <div class='col d-flex justify-content-center align-items-center '>
          <h2 class='primary-text-color font-weight-bold'>
            Upcomming Sessions!
          </h2>
        </div>
      </div>
      <div class='row mt-3 d-flex align-item-center justify-content-center'>
        {ui.notification !== null && ui.notification.status === 'SENDING' && (
          <Loading />
        )}
        {workshop.items.map((w) => (
          <WorkshopCard
            onRegisterClick={handleClick}
            name={w.name.value}
            shortdesc={w.shortdesc.value}
            longdesc={w.longdesc.value}
            date={w.date}
            nameorg={w.nameorg.value}
          />
        ))}
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={state.open}
          onClose={handleClose}
          autoHideDuration={2000}
          TransitionComponent={state.Transition}
          message="You are now Registered for the session!"
          key={state.vertical + state.horizontal}

        />
      </div>
    </div>
  );
};

export default Workshops;
