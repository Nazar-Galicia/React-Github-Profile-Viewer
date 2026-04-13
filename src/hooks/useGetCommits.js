import {useEffect, useState} from "react";
import githubApi from "@/api/githubAPI.js";

export function useGetCommits(userId, repoId) {
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        githubApi.getRepository(userId, repoId).then(setRepo);
    }, [repoId, userId]);

    return {
        repo,
    }
}