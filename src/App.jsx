import { useState } from 'react'
import './App.css'
import {Component} from "react";

class App extends Component{
    // const [count, setCount] = useState(0)
    //
    // const [name, setName] = useState('Chris');


render() {
    return (
        <>
            <h1>Test</h1>
            <div className="card">
                <button>
                    count is ...
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
}

export default App
