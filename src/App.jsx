import './App.css'
import {useEffect, useState} from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";


const App = () => {

    console.log('render');

    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])

    const onChangeField = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
    }

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/users')
                    const usersData = await response.json()
                    setMonsters(usersData)
                } catch (err) {
                    console.error(`You have an error which is: ${err}`)
                }
            }

            fetchData()

        }, []
    )

    const filteredMonsters = monsters.filter(monster => {
        return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return(
        <>
            <h1>Hello</h1>
            <SearchBox
                onChangeHandler={onChangeField}
                inputPlaceholder='Search monsters'
                inputClassName='search-box'
            />

            <CardList monsters={filteredMonsters} />
        </>
    )
}

// class App extends Component{
//
//     constructor() {
//         super();
//
//         this.state = {
//             monsters: [],
//             searchedField: '',
//         }
//     }
//
//     async componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(data => this.setState(() => {
//                     return {monsters: data}
//                 }, () => {
//                     console.log(this.state)
//                 }
//             ))
//
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//
//             if(!response.ok) {
//                 throw new Error('Network response was not ok!')
//             }
//
//             const users = await response.json()
//             this.setState(() => {
//                 return {monsters: users}
//             });
//
//         } catch (err) {
//             console.error(`Error fetching data: ${err}`)
//         }
//     }
//
//     onChangeField = (event) => {
//         const monsterInputValue = event.target.value.toLocaleLowerCase()
//
//         this.setState(() => {
//             return {
//                 searchedField: monsterInputValue
//             }
//         })
//
//     }
//
//     render() {
//
//         const {monsters, searchedField} = this.state;
//         const {onChangeField} = this;
//
//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchedField)
//         })
//
//
//         return (
//             <>
//
//                 <SearchBox
//                     onChangeHandler={onChangeField}
//                     inputPlaceholder='Search monsters'
//                     inputClassName='search-box'
//                 />
//
//                 <CardList monsters={filteredMonsters}/>
//             </>
//         )
//     }
// }

export default App
