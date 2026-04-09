import Repository from "@/components/Repository/Repository.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import githubApi from "@/api/githubAPI.js";
import Loader from "@/components/Loader/Loader.jsx";

const Repo = () => {
    const {
        userId,
        repoId,
    } = useParams();

    const [repo, setRepo] = useState([]);
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        githubApi.getRepository(userId, repoId).then(setRepo);
        githubApi.getRepositoryCommits(userId, repoId, 1, 40).then(setCommits);
    }, [repoId, userId]);

    console.log(commits);

    if (!repo || !repo.owner) return <Loader>Loading GitHub data...</Loader>;

    return (
        <Repository repo={repo} commits={commits} setCommits={setCommits} />
    )
}

export default Repo;