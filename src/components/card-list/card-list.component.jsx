import {Component} from "react";
import './card-list.styles.css'

class CardList extends Component {
    render() {
        const {monsters} = this.props

        return (
            <div className='grid'>
                {monsters.map(monster => {
                    return (
                        <div key={monster.id} className='container'>
                            <h3>{monster.name}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CardList;