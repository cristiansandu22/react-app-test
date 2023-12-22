import './card-list.styles.css'
import Card from "../card/card.component.tsx";

type Monster = {
    id: string,
    name: string
}

type Monsters = {
    monsters: Array<Monster>
}

const CardList = ({monsters}: Monsters) => {

    return(
        <div className='grid'>
            {monsters.map((monster: Monster) => {
                return(
                    <Card key={monster.id} monster={monster.name} />
                )
            })}
        </div>
    )
}

export default CardList;
