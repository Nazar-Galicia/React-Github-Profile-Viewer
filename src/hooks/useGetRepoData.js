import {useEffect, useState} from "react";
import githubApi from "@/api/githubAPI.js";

export function useGetRepoData(userId, repoId) {
    const [repo, setRepo] = useState([]);
    const [branches, setBranches] = useState([]);
    const [deployments, setDeployments] = useState([]);

    useEffect(() => {
        githubApi.getRepository(userId, repoId).then(setRepo);
        githubApi.getRepositoryBranches(userId, repoId).then(setBranches);
        githubApi.getRepositoryDeployments(userId, repoId).then(setDeployments);
    }, [repoId, userId]);

    return {
        repo,
        branches,
        deployments,
    }
}