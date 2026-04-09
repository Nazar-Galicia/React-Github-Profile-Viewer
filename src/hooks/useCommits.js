import {useEffect, useRef, useState} from "react";
import {useObserver} from "@/hooks/useObserver.js";
import githubAPI from "@/api/githubAPI.js";
import {mergeArrays} from "@/utils/mergeArrays.js";

export function useCommits(repo, setCommits) {
    const [page, setPage] = useState(0);
    const repoObserverRef = useRef(null);

    useObserver(setPage, repoObserverRef)

    useEffect(() => {
        githubAPI.getRepositoryCommits(repo.owner.login, repo.name, page, 40)
            .then(newCommits => {
                setCommits(prev => mergeArrays(prev, newCommits))
            });
    }, [page])

    return {
        repoObserverRef,
    }
}