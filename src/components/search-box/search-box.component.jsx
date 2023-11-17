import {Component} from "react";

class SearchBox extends Component {

    render() {

        const {onChangeHandler, inputPlaceholder, inputClassName} = this.props

        return(
            <div>
                <input
                    type='search'
                    className={inputClassName}
                    placeholder={inputPlaceholder}
                    onChange={onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;