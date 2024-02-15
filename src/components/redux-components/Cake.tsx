import {useSelector, useDispatch} from "react-redux";
// @ts-ignore
import cakeSlice from "../../features/cake/cakeSlice.js";


const Cake = () => {

    // @ts-ignore
    const numberOfCakes = useSelector((state) => state.cake.numOfCakes)
    const {ordered, restocked} = cakeSlice.actions;

    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of cakes: {numberOfCakes}</h2>
            <button onClick={() => dispatch(restocked(1))}>Increment</button>
            <button onClick={() => dispatch(ordered())}>Decrement</button>
        </div>
    )
}

export default Cake;
