import githubAPI from "@/api/githubAPI.js";
import {useEffect, useRef} from "react";

export function useSearchUser(
    setUsers,
    setPage,
    isSearching,
    query,
) {
    const formRef = useRef(null);

    let timeout = useRef(null);

    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            const q = query.trim();

            if (q.length >= 2) {
                githubAPI.searchUsers(q).then((users) => {
                    isSearching.current = true;
                    setUsers(users?.items || []);
                    setPage(0);
                });
            } else {
                githubAPI.getUsers(0, 40).then((users) => {
                    isSearching.current = false;
                    setUsers(users || []);
                    setPage(0);
                });
            }
        }, 500);

        return () => clearTimeout(timeout.current);
    }, [query]);

    return {
        formRef,
    }
}