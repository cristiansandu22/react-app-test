import { useState } from 'react'
import './App.css'
import {Component} from "react";

class App extends Component{

    constructor() {
        super();

        this.state = {
            monsters: [
                {
                    id: 1,
                    name: 'Cristinel'
                },
                {
                    id: 2,
                    name: 'Emilique'
                },
                {
                    id: 3,
                    name: 'Madalinutz'
                },
                {
                    id: 4,
                    name: 'Didilique'
                }
            ]
        }
    }

    render() {


        return (
            <>
                {this.state.monsters.map(monster => {
                    return <h1 key={monster.id}>{monster.name}</h1>;
                })}
            </>
        )
    }
}

export default App
