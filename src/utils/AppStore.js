import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';

const Appstore = configureStore(
    {
        reducer : {
            User : userReducer,  
        },
    }
)
export default Appstore;