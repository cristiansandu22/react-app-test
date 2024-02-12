import {configureStore} from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.js";

const cakeReducer = cakeSlice.reducer;

const store = configureStore({
    reducer: {
        cake: cakeReducer
    }
})

export default store;
