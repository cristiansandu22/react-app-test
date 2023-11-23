const SearchBox = ({onChangeHandler, inputPlaceholder, inputClassName}) => {

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

export default SearchBox;