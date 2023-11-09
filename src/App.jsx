import { useState } from 'react'
import './App.css'
import {Component} from "react";

class App extends Component{

constructor() {
    super();

    this.state = {
        name: {
            firstName: 'Chris',
            lastName: 'Sandu'
        },
        company: 'EmmCris Business'
    }
}

render() {


    return (
        <>
            <h1>Test</h1>
            <div className="card">
                <p>My name is {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company} </p>
                <button onClick={() => this.setState(
                    () => {
                        return {name: {
                                firstName: 'Emilique',
                                lastName: 'Pavel'
                            }}
                    },
                    () => {
                        console.log(this.state)
                    }
                )}>Change name</button>
                <button onClick={() => console.log(this.state)}>ConsoleLOG</button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
}

export default App
