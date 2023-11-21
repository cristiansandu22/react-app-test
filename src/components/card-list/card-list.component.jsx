import {Component, useState} from "react";
import './card-list.styles.css'
import Card from "../card/card.component.jsx";

const CardList = () => {

    const [monsters, setMonsters] = useState('Christique')

    return(
        <div>
            <h1>Hello</h1>
            <h2>{monsters}</h2>
        </div>
    )
}

// class CardList extends Component {
//     render() {
//         const {monsters} = this.props
//
//         return (
//             <div className='grid'>
//                 {monsters.map(monster => {
//                     return (
//                        <Card key={monster.id} monster={monster} />
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;