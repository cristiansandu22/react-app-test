import { ChangeEventHandler } from "react";

type SearchBoxProps = {
    inputPlaceholder: string,
    inputClassName?: string,
    onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({onChangeHandler, inputPlaceholder, inputClassName}: SearchBoxProps) => {

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
