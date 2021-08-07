import React from 'react';
import WorkshopCard from '../Components/Workshopcard';
import { fetchworkshop } from '../redux/workshop-actions';
import { useSelector,useDispatch } from 'react-redux';
import {useEffect} from 'react'
const Workshops = () => {
  const dispatch=useDispatch()
  const workshop = useSelector((state) => state.workshops);

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
      <div class='row mt-3'>
        {workshop.items.map((w) => (
          <WorkshopCard
            name={w.name.value}
            shortdesc={w.shortdesc.value}
            longdesc={w.longdesc.value}
            date={w.date}
            nameorg={w.nameorg.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Workshops;
