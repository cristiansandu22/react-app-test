import './App.css'
import {useEffect, useState} from "react";
import CardList from "./components/card-list/card-list.component.tsx";
import SearchBox from "./components/search-box/search-box.component.tsx";


const App = () => {

    console.log('render');

    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonster] = useState(monsters)

    const onChangeField = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
    }

    //-----fetch monsters when the component is initially rendered------------------------------------------------------
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

        }, [])

    //-----every time 'searchField' and 'monsters' are changed -> setFilteredMonster------------------------------------
   useEffect(() => {
       const newFilteredMonsters = monsters.filter(monster => {
           return monster.name.toLocaleLowerCase().includes(searchField)
       })

       setFilteredMonster(newFilteredMonsters)
   }, [searchField, monsters])

    return(
        <>
            <SearchBox
                onChangeHandler={onChangeField}
                inputPlaceholder='Search monsters'
                inputClassName='search-box'
            />

            <CardList monsters={filteredMonsters} />
        </>
    )
}

export default App
