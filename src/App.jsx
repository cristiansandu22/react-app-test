import { useState } from 'react'
import './App.css'
import {Component} from "react";

class App extends Component{

    constructor() {
        super();

        this.state = {
            monsters: []
        }
        console.log('constructor')
    }

    async componentDidMount() {
        console.log('componentDidMount')
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(data => this.setState(() => {
        //             return {monsters: data}
        //         }, () => {
        //             console.log(this.state)
        //         }
        //     ))

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            if(!response.ok) {
                throw new Error('Network response was not ok!')
            }

            const users = await response.json()
            this.setState(() => {
                return {monsters: users}
            }, () => {
                console.log(this.state)
            });

        } catch (err) {
            console.error(`Error fetching data: ${err}`)
        }
    }

    render() {
    console.log('render')

        return (
            <>
                {this.state.monsters.map(monster => {
                    return <div key={monster.id}>
                        <h1>{`${monster.id} - ${monster.name}`}</h1>
                    </div>;
                })}
            </>
        )
    }
}

export default App
