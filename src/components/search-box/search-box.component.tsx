
const SearchBox = ({onChangeHandler, inputPlaceholder, inputClassName}) => {

    return(
        <div>
            <input
                type='search'
                className={inputClassName}
                placeholder={inputPlaceholder}
                onChange={(e) => onChangeHandler(e)}
            />
        </div>
    )
}

export default SearchBox;
