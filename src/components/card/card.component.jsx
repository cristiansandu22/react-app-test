import './card.style.css'

const Card = ({monster}) => {
    return (
        <div className='card-container'>
            <h3>{monster}</h3>
        </div>
    )
}

export default Card