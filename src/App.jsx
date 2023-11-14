import './App.css'
import {Component} from "react";
import CardList from "./components/card-list/card-list.component.jsx";

class App extends Component{

    constructor() {
        super();

        this.state = {
            monsters: [],
            searchedField: '',
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

    onChangeField = (event) => {
        const monsterInputValue = event.target.value.toLocaleLowerCase()

        this.setState(() => {
            return {
                searchedField: monsterInputValue
            }
        })

    }



    render() {
        console.log('render')

        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchedField)
        })


        return (
            <>

                <input
                    type="search"
                    placeholder='Search monsters'
                    className='search-box'
                    onChange={this.onChangeField}
                />

                {/*{filteredMonsters.map(monster => {*/}
                {/*    return <div key={monster.id}>*/}
                {/*        <h3>{monster.name}</h3>*/}
                {/*    </div>;*/}
                {/*})}*/}

                <CardList />
            </>
        )
    }
}

export default App
