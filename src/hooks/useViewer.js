import {mergeArrays} from "@/utils/mergeArrays.js";
import {useObserver} from "@/hooks/useObserver.js";
import {useEffect, useRef, useState} from "react";
import githubAPI from "@/api/githubAPI.js";

export function useViewer() {
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

    return {
        observerRef,
        users,
        setUsers,
        setPage,
        isSearching,
        query,
        setQuery,
    }
}