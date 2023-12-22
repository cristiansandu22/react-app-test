import './card-list.styles.css'
import Card from "../card/card.component.tsx";

const CardList = ({monsters}) => {

    return(
        <div className='grid'>
            {monsters.map((monster) => {
                return(
                    <Card key={monster.id} monster={monster.name} />
                )
            })}
        </div>
    )
}

export default CardList;
