import './card.style.css'

type Monster = {
    monster: string;
}

const Card = ({monster}: Monster) => {
    return (
        <div className='card-container'>
            <h3>{monster}</h3>
        </div>
    )
}

export default Card;
