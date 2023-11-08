import { useState } from 'react'
import './App.css'
import {Component} from "react";

class App extends Component{

constructor() {
    super();

    this.state = {
        name: 'Chris'
    }
}

render() {


    return (
        <>
            <h1>Test</h1>
            <div className="card">
                <p>My name is {this.state.name} </p>
                <button onClick={() => this.setState({name: 'Emilique'})}>Change name</button>
                <button onClick={() => console.log(this.state.name)}>ConsoleLOG</button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
}

export default App
