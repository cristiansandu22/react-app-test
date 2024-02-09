import {Monster} from "../../App.tsx"
import './card-list.styles.css'
import Card from "../card/card.component.tsx";

type CardListProps = {
    monsters: Monster[]
}

//test

const CardList = ({monsters}: CardListProps) => {

    return(
        <div className='grid'>
            {monsters.map((monster) => {
                return(
                    <Card key={monster.id} monster={monster} />
                )
            })}
        </div>
    )
}

export default CardList;
