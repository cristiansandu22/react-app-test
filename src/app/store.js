import {configureStore} from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.js";
import iceCreamSlice from "../features/icecream/iceCreamSlice.js";
import userSlice from "../features/user/userSlice.js";

const cakeReducer = cakeSlice.reducer;
const iceCreamReducer = iceCreamSlice.reducer;
const userReducer = userSlice.reducer;

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    }
})

export default store;
