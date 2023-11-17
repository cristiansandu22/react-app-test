import {Component} from "react";

class SearchBox extends Component {

    render() {

        const onChange = this.props.onChange;
        const {inputPlaceholder} = this.props

        return(
            <div>
                <input
                    type='search'
                    className='search-box'
                    placeholder={inputPlaceholder}
                    onChange={onChange}
                />
            </div>
        )
    }
}

export default SearchBox;