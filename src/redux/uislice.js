import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ui',
  initialState: {
    notification: null,
  },
  reducers: {
    setnotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    resetnotification(state){
state.notification=null;
    }
  },
});

export const uisliceactions = slice.actions;
export default slice;
