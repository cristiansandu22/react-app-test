import {useSelector, useDispatch} from "react-redux";
import {JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect} from "react";
import {fetchUsers} from "../../features/user/userSlice.ts";

const Users = () => {

    const dispatch = useDispatch();
    // @ts-ignore
    const user = useSelector(state => state.user)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUsers('https://jsonplaceholder.typicode.com/users'))
    }, []);

    return (
        <div>
            <h2>List of user</h2>

            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? (<div>{user.error}</div>) : null}
            {!user.loading && user.users ? (
                <ul>
                    {user.users.map((singleUser: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
                        return(
                            <li key={singleUser.id}>{singleUser.name}</li>
                        )
                    })}
                </ul>
            ) : null}

        </div>
    )
}

export default Users;

