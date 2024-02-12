import {createSlice} from "@reduxjs/toolkit";

const initialStateCake = {
    numOfCakes: 10
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialStateCake,
    reducers: {
        ordered: (state) => {
            state.numOfCakes = state.numOfCakes - 1
        },
        restocked: (state, action) => {
            state.numOfCakes = state.numOfCakes + action.payload
        }
    }
})
export default cakeSlice;


