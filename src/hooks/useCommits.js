import {useEffect, useRef, useState} from "react";
import githubAPI from "@/api/githubAPI.js";
import {mergeArrays} from "@/utils/mergeArrays.js";

export function useCommits(userId, repoId) {
    const [commits, setCommits] = useState([]);

    const [page, setPage] = useState(1);
    const repoObserverRef = useRef(null);

    const [activeTab, setActiveTab] = useState("commits")

    useEffect(() => {
        githubAPI.getRepositoryCommits(userId, repoId, page, 40)
            .then(newCommits => {
                setCommits(prev => mergeArrays(prev, newCommits))
            });
    }, [userId, repoId, page]);

    useEffect(() => {
        setPage(1)
        setCommits([])
    }, [activeTab]);

    return {
        commits,
        setPage,
        repoObserverRef,
        activeTab,
        setActiveTab,
    }
}