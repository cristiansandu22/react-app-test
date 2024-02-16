import {useSelector, useDispatch} from "react-redux";
import iceCreamSlice from "../../features/icecream/iceCreamSlice.ts";
import {useState} from "react";

const IceCream = () => {

    const [anotherValue, setAnotherValue] = useState(1)
    const [value, setValue] = useState(1)

    // @ts-ignore
    const numberOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)

    const {ordered, restocked} = iceCreamSlice.actions;

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of ice creams: {numberOfIceCreams}</h2>
            <button onClick={() => dispatch(restocked(value))}>Increment</button>
            <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))}/>
            <button onClick={() => dispatch(ordered(anotherValue))}>Decrement</button>
            <input type="number" value={anotherValue} onChange={(e) => setAnotherValue(parseInt(e.target.value))}/>
        </div>
    )
}

export default IceCream;
