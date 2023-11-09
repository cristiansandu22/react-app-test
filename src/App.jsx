import { useState } from 'react'
import './App.css'
import {Component} from "react";

class App extends Component{

    constructor() {
        super();

        this.state = {
            monsters: []
        }
    }

    async componentDidMount() {
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

        // const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // const users = await response.json()
        //
        // this.setState({monsters: users}, () => {
        //     console.log(this.state)
        // })

        // const hello = async function() {
        //     const data = await fetch('https://jsonplaceholder.typicode.com/users')
        //     const users = await data.json()
        //     return this.setState({monsters: users})
        // }
        //
        // hello()
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
