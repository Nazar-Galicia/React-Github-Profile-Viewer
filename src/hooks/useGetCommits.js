import {useEffect, useState} from "react";
import githubApi from "@/api/githubAPI.js";

export function useGetCommits(userId, repoId) {
    const [repo, setRepo] = useState([]);
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        githubApi.getRepository(userId, repoId).then(setRepo);
        githubApi.getRepositoryCommits(userId, repoId, 1, 40).then(setCommits);
    }, [repoId, userId]);

    console.log(commits);

    return {
        repo
    }
}