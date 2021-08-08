import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
items:[]

};

const slice = createSlice({
  name: 'auth',
  initialState: initialstate,
  reducers: {
    add(state,action){
        state.items.push(action.payload)
    }
  },
});

export const uwsliceactions = slice.actions;
export default slice.reducer;
