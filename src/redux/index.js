import workshopreducer from './workshops'
import authreducer from './auth'
import uireducer from './uislice'
import singlereducer from './signle'
import { configureStore } from '@reduxjs/toolkit'

const store=configureStore({
    reducer:{
        ui:uireducer,
        auth:authreducer,
        single:singlereducer,
        workshops:workshopreducer
    }
})


export default store;