import {useEffect, useState} from "react";
import githubAPI from "@/api/githubAPI.js";

export function useGetUserData(id) {
    const [user, setUser] = useState([]);
    const [repos, setRepos] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [manyRepos, setManyRepos] = useState([]);

    useEffect(() => {
        if (!id) return;

        setUser(null);

        githubAPI.getUser(id).then(setUser);
        githubAPI.getRepos(id).then(setRepos);
        githubAPI.getFollowers(id, 1, 40).then(setFollowers);
        githubAPI.getRepos(id, 1, 120).then(setManyRepos);
    }, []);

    return {
        user,
        repos,
        followers,
        setRepos,
        setFollowers,
        manyRepos,
    };
}