import {configureStore} from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.js";
import iceCreamSlice from "../features/icecream/iceCreamSlice.js";

const cakeReducer = cakeSlice.reducer;
const iceCreamReducer = iceCreamSlice.reducer;

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
})

export default store;
