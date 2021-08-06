import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  islogin: false,
  isparticipant:false,
iserror:false
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
    },
    toggleerror(state){
state.iserror=!state.iserror
    }
  },
});

export const autrhsliceactions = authslice.actions;
export default authslice.reducer;
