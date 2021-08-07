import workshopreducer from './workshops'
import authreducer from './auth'
import uireducer from './uislice'

import { configureStore } from '@reduxjs/toolkit'

const store=configureStore({
    reducer:{
        ui:uireducer,
        auth:authreducer,
        workshops:workshopreducer
    }
})


export default store;