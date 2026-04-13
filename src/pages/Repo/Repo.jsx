import Repository from "@/components/Repository/Repository.jsx";
import Loader from "@/components/Loader/Loader.jsx";
import {useContext} from "react";
import {RepoContext} from "@/context/RepoContext.jsx";

const Repo = () => {

    const {
        repo,
    } = useContext(RepoContext);

    if (!repo || !repo.owner) return <Loader>Loading GitHub data...</Loader>;

    return (
        <Repository repo={repo} />
    )
}

export default Repo;