import {useEffect, useState} from "react";
import githubApi from "@/api/githubAPI.js";

export function useGetRepoData(userId, repoId) {
    const [repo, setRepo] = useState([]);
    const [branches, setBranches] = useState([]);
    const [deployments, setDeployments] = useState([]);
    const [readme, setReadme] = useState("");

    useEffect(() => {
        githubApi.getRepository(userId, repoId).then(setRepo);
        githubApi.getRepositoryBranches(userId, repoId).then(setBranches);
        githubApi.getRepositoryDeployments(userId, repoId).then(setDeployments);
        githubApi.getRepositoryReadmeMD(userId, repoId).then((readmeMD) => {
            const decodedReadme = decodeURIComponent(
                encodeURI(atob(readmeMD.content.replace(/\n/g, '')))
            )

            setReadme(decodedReadme);
        })
    }, [repoId, userId]);

    return {
        repo,
        branches,
        deployments,
        readme,
    }
}