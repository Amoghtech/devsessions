import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  islogin: false,
  isparticipant:false,

};

const authslice = createSlice({
  name: 'auth',
  initialState: initialstate,
  reducers: {
    loginparticipant(state) {
      state.islogin = true;
    },
    logoutparticipant(state) {
      state.islogin = false;
    },
    participant(state){
        state.isparticipant=true;
    }
  },
});

export const authsliceactions = authslice.actions;
export default authslice.reducer;
