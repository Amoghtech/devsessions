import { uisliceactions } from './uislice';
import { workshopsliceactions } from './workshops';
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
  return (dispatch) => {
    const fetchdata = async () => {
      const res = await fetch(
        'https://robohacks-e41e8-default-rtdb.firebaseio.com/workshops.json'
      );
      if (!res.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await res.json();
      const transformed = [];
      let t = 0;
      for (let key in data) {
        transformed.push({
          id: key,
          ...data[key],
        });
        t++;
      }

      return { items: transformed, total: t };
    };
    try {
      const data = await fetchdata();
      dispatch(
        workshopsliceactions.replaceworkshop({
          items: data.items,
          total: data.total,
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

export const fetchsingleworkshop = async (workshopid) => {
  const fetchdata = async () => {
    const res = await fetch(
      `https://robohacks-e41e8-default-rtdb.firebaseio.com/workshops.json/${workshopid}`
    );
    if (!res.ok) {
      throw new Error('Could not fetch data');
    }

    const data = await res.json();

    return { id: workshopid, ...data };
  };
  try {
    const data = await fetchdata();
    return data;
  } catch (err) {
    dispatch(
      uisliceactions.setnotification({
        status: 'ERROR',
        message: 'Could fetch data',
      })
    );
  }
};
