import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    numOfCakes: number
}

const initialStateCake: InitialState = {
    numOfCakes: 10,
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialStateCake,
    reducers: {
        ordered: (state) => {
            state.numOfCakes = state.numOfCakes - 1
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfCakes = state.numOfCakes + action.payload
        }
    }
})
export default cakeSlice;


