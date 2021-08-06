import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  items: [],
  total:0,
  iserror: false,
};

const authslice = createSlice({
  name: 'workshop',
  initialState: initialstate,
  reducers: {
    addworkshop(state, action) {
      state.items.push(action.payload);
      state.total++;
    },
    removeworkshop(state, action) {
      const userid = action.payload.userid;
      const workshop = state.items.find((item) => item.creatorid === userid);
      if (!workshop) {
        state.iserror = true;
        return;
      }
      state.items = state.items.filter((item) => item.creatorid !== userid);
    state.total--;
    },
    replaceworkshop(state,action){
        state.items=action.payload.items;
        state.total=action.payload.total;

    },
    toggleerror(state) {
      state.iserror = !state.iserror;
    },
  },
});

export const autrhsliceactions = authslice.actions;
export default authslice.reducer;
