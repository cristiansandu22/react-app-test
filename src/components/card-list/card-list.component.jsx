import {Component} from "react";

class CardList extends Component {
    render() {
        console.log('Render from CarList component')
        const {monsters} = this.props

        return (
            <div>
                {monsters.map(monster => {
                    return (
                        <div key={monster.id}>
                            <h3>{monster.name}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CardList;