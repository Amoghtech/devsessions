import React from 'react';
import WorkshopCard from '../Components/Workshopcard';
import { fetchworkshop } from '../redux/workshop-actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../Components/Loading';
const Workshops = () => {
  const dispatch = useDispatch();
  const workshop = useSelector((state) => state.workshops);
  const auth = useSelector((state) => state.auth);
  const ui = useSelector((state) => state.ui);
  useEffect(() => {
    dispatch(fetchworkshop());
  }, [fetchworkshop]);

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
            key={w.id}
            id={w.id}
            name={w.name.value}
            shortdesc={w.shortdesc.value}
            longdesc={w.longdesc.value}
            date={w.date}
            tag={w.tag}
            islogin={auth.islogin}
            nameorg={w.nameorg.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Workshops;
