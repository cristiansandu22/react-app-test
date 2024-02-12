import store from "./app/store.js";
import cakeSlice from "./features/cake/cakeSlice.js";

const cakeActions = cakeSlice.actions;

console.log('This is the initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updates state', store.getState())
})

console.log(cakeActions.ordered());

unsubscribe();
