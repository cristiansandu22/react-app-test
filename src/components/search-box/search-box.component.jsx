import {Component} from "react";

class SearchBox extends Component {

    render() {

        const onChange = this.props.onChange;
        const {inputPlaceholder, inputType} = this.props

        return(
            <div>
                <input
                    type={inputType}
                    className='search-box'
                    placeholder={inputPlaceholder}
                    onChange={onChange}
                />
            </div>
        )
    }
}

export default SearchBox;