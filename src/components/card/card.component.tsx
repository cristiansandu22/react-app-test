import {Monster} from "../../App.tsx"
import "./card.style.css"

type CardProps = {
    monster: Monster
}

const Card = ({monster}: CardProps) => {
    return (
        <div className='card-container'>
            <h3>{monster.name}</h3>
        </div>
    )
}

export default Card;
