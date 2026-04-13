import {useEffect, useRef, useState} from "react";
import githubAPI from "@/api/githubAPI.js";
import {mergeArrays} from "@/utils/mergeArrays.js";

export function useCommits(userId, repoId) {
    const [commits, setCommits] = useState([]);

    const [page, setPage] = useState(1);
    const repoObserverRef = useRef(null);

    useEffect(() => {
        githubAPI.getRepositoryCommits(userId, repoId, page, 40)
            .then(newCommits => {
                setCommits(prev => mergeArrays(prev, newCommits))
            });
    }, [userId, repoId, page]);

    return {
        commits,
        setPage,
        repoObserverRef,
    }
}