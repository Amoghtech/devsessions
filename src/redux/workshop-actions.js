import { uisliceactions } from './uislice';
import { workshopsliceactions } from './workshops';
import { useDispatch } from 'react-redux';
import { singlesliceactions } from './signle';
export const sendworkshopdata = (workshopdata) => {
  return async (dispatch) => {
    const senddata = async () => {
      dispatch(
        uisliceactions.setnotification({
          status: 'SENDING',
          message: 'SENDING DATA',
        })
      );
      const res = await fetch(
        'https://robohacks-e41e8-default-rtdb.firebaseio.com/workshops.json',
        {
          method: 'POST',
          body: JSON.stringify(workshopdata),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!res.ok) {
        throw new Error('Could not send data');
      }
    };
    try {
      await senddata();
      dispatch(
        uisliceactions.setnotification({
          status: 'DONE',
          message: 'SENDED',
        })
      );
    } catch (err) {
      dispatch(
        uisliceactions.setnotification({
          status: 'ERROR',
          message: 'Could not send',
        })
      );
    }
  };
};

export const fetchworkshop = () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      dispatch(
        uisliceactions.setnotification({
          status: 'SENDING',
          message: 'SENDING DATA',
        })
      );
      const res = await fetch(
        'https://robohacks-e41e8-default-rtdb.firebaseio.com/workshops.json'
      );
      if (!res.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await res.json();
      const transformed = [];

      for (let key in data) {
        transformed.push({
          id: key,
          ...data[key],
        });
      }

      return { items: transformed };
    };
    try {
      const data = await fetchdata();
      console.log(data);
      dispatch(
        uisliceactions.setnotification({
          status: 'DONE',
          message: 'SENDED',
        })
      );
      dispatch(
        workshopsliceactions.replaceworkshop({
          items: data.items,
        })
      );
    } catch (err) {
      dispatch(
        uisliceactions.setnotification({
          status: 'ERROR',
          message: 'Could fetch data',
        })
      );
    }
  };
};

export const fetchsingleworkshop = (id) => {
  return async (dispatch) => {
    const fetchdata = async () => {
      dispatch(
        uisliceactions.setnotification({
          status: 'SENDING',
          message: 'SENDING DATA',
        })
      );
      let url = `https://robohacks-e41e8-default-rtdb.firebaseio.com/workshops/${id}.json`;
console.log(url)
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await res.json();

      return { ...data };
    };
    try {
      console.log('id ', id);
      const data = await fetchdata();
      console.log(data)
      dispatch(singlesliceactions.setdata({
        name:data.name.value,
        nameorg:data.nameorg.value,
        longdesc:data.longdesc.value,
        shortdesc:data.shortdesc.value,
        date:data.date,
        tag:data.tag
      }))
      dispatch(
        uisliceactions.setnotification({
          status: 'DONE',
          message: 'SENDED',
        })
      );
      // dispatch(
      //   workshopsliceactions.replaceworkshop({
      //     items: data.items,
      //   })
      // );
    } catch (err) {
      dispatch(
        uisliceactions.setnotification({
          status: 'ERROR',
          message: 'Could fetch data',
        })
      );
    }
  };
};
