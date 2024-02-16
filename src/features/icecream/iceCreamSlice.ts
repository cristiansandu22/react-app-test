import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    numOfIceCreams: number
}

const initialStateIceCream: InitialState = {
    numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState: initialStateIceCream,
    reducers: {
        ordered: (state, action: PayloadAction<number>) => {
            state.numOfIceCreams -= action.payload
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfIceCreams += action.payload
        }
    }
})

export default iceCreamSlice;
