import workshopreducer from './workshops'
import authreducer from './auth'
import uireducer from './uislice'
import singlereducer from './signle'
import { configureStore } from '@reduxjs/toolkit'
import ureducer from './userworkshop'
const store=configureStore({
    reducer:{
        ui:uireducer,
        auth:authreducer,
        single:singlereducer,
        workshops:workshopreducer,
        uw:ureducer
    }
})


export default store;