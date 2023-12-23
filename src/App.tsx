import './App.css'
import {useEffect, useState, ChangeEvent} from "react";
import CardList from "./components/card-list/card-list.component.tsx";
import SearchBox from "./components/search-box/search-box.component.tsx";
import getData from "./helpers/data.helper.ts";

export type Monster = {
    id: string;
    name: string;
}

const App = () => {

    console.log('render');

    const [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState<Monster[]>([])
    const [filteredMonsters, setFilteredMonster] = useState(monsters)

    const onChangeField = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
    }

    //-----fetch monsters when the component is initially rendered------------------------------------------------------
    useEffect(() => {

        const fetchUsers = async () => {
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
            setMonsters(users)
        }

        fetchUsers()

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
