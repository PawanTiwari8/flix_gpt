import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import moviesReducer from './MovieSlice';

const Appstore = configureStore(
    {
        reducer : {
            User : userReducer, 
            movies : moviesReducer,
        },
    }
)
export default Appstore;