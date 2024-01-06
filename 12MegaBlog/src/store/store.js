import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice';
const store = configureStore (
    {
        reducer : {
            auth : authSlice
        }
    }
)

// console.log(store);

export default store;