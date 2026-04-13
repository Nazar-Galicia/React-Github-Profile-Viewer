import {useEffect, useState} from "react";
import githubApi from "@/api/githubAPI.js";
import githubAPI from "@/api/githubAPI.js";

export function useGetCommits(userId, repoId) {
    const [repo, setRepo] = useState([]);
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        githubApi.getRepository(userId, repoId).then(setRepo);
        githubApi.getRepositoryBranches(userId, repoId).then(setBranches);
    }, [repoId, userId]);

    return {
        repo,
        branches,
    }
}