import {createSlice} from "@reduxjs/toolkit";

const initialStateIceCream = {
    numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState: initialStateIceCream,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        }
    }
})

export default iceCreamSlice;
