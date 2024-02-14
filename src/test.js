import store from "./app/store.js";
import cakeSlice from "./features/cake/cakeSlice.js";
import iceCreamSlice from "./features/icecream/iceCreamSlice.js";

const cakeActions = cakeSlice.actions;
const iceCreamActions = iceCreamSlice.actions;

console.log('This is the initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updates state', store.getState())
})

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(10));

unsubscribe();
