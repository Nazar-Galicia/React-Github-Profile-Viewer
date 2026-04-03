import UsersList from "@/components/UsersList/UsersList.jsx";
import {useEffect, useRef, useState} from "react";
import githubAPI from "@/api/githubAPI.js";
import "./Viewer.css"
import SearchUser from "@/components/SearchUser/SearchUser.jsx";
import {mergeArrays} from "@/utils/mergeArrays.js";
import useObserver from "@/hooks/useObserver.js";

const Viewer = () => {
    const observerRef = useRef(null);
    const [page, setPage] = useState(0);
    const isSearching = useRef(false);
    const [query, setQuery] = useState("");

    useObserver(setPage, observerRef);

    const [users, setUsers] = useState([]);
    const perPage = 40;

    useEffect(() => {
        console.log(page)

        if (!isSearching.current) {
            githubAPI.getUsers(page, perPage).then((users) => {
                setUsers(prev => mergeArrays(prev, users));
            })
        } else {
            githubAPI.searchUsers(query, page, perPage).then((users) => {
                setUsers(prev => mergeArrays(prev, users.items));
            })
        }
    }, [page])

    return (
        <div className="viewer">
            <div className="container">
                <div className="viewer__text-wrapper">
                    <h1 className="viewer__heading">GitHub Users</h1>
                    <p className="viewer__subtitle">Explore and search for github users</p>
                </div>
                <SearchUser
                    setUsers={setUsers}
                    setPage={setPage}
                    isSearching={isSearching}
                    query={query}
                    setQuery={setQuery}
                />
                <UsersList users={users} />
            </div>
            <div ref={observerRef}></div>
        </div>
    )
}
export default Viewer