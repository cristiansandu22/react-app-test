import {Component} from "react";
import './card.style.css'

class Card extends Component {

    render() {

        const {name} = this.props.monster

        return(
            <div className='card-container'>
                <h3>{name}</h3>
            </div>
        )
    }
}

export default Card