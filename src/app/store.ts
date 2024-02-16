import {configureStore} from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.ts";
import iceCreamSlice from "../features/icecream/iceCreamSlice.ts";
import userSlice from "../features/user/userSlice.ts";

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
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

