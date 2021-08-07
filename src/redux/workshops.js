import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  items: [],
  
};

const workshopslice = createSlice({
  name: 'workshop',
  initialState: initialstate,
  reducers: {
    addworkshop(state, action) {
      state.items.unshift(action.payload);
    
    },
    removeworkshop(state, action) {
      const userid = action.payload.userid;
      const workshop = state.items.find((item) => item.creatorid === userid);
      if (!workshop) {
        state.iserror = true;
        return;
      }
      state.items = state.items.filter((item) => item.creatorid !== userid);
    
    },
    replaceworkshop(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const workshopsliceactions = workshopslice.actions;
export default workshopslice.reducer;
