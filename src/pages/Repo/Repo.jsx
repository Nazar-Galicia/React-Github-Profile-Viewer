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

    useEffect(() => {
        githubApi.getRepository(userId, repoId).then(setRepo);
    }, [repoId, userId]);

    if (!repo || !repo.owner) return <Loader>Loading GitHub data...</Loader>;

    return (
        <Repository repo={repo}/>
    )
}

export default Repo;