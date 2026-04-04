import {useEffect, useState} from "react";
import githubAPI from "@/api/githubAPI.js";
import {mergeArrays} from "@/utils/mergeArrays.js";

export function useUserInfo(setRepos, setFollowers, user, manyRepos) {
    const [tab, setTab] = useState("repos");
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (tab === "repos") {
            githubAPI.getRepos(user.login, page, 40)
                .then(repos => {
                    setRepos(prev => mergeArrays(prev, repos))
                })
        } else if (tab === "followers") {
            githubAPI.getFollowers(user.login, page, 40)
                .then(followers => {
                    setFollowers(prev => mergeArrays(prev, followers))
                })
        }
    }, [page])

    useEffect(() => {
        setPage(1);
    }, [tab])

    const sortedRepos = [...manyRepos].sort(
        (a, b) => b.stargazers_count - a.stargazers_count
    );

    const topRepos = sortedRepos.slice(0, 5);
    const pinnedRepos = sortedRepos.slice(5, 13);

    return {
        setTab,
        tab,
        setPage,
        pinnedRepos,
        topRepos,
    }
}