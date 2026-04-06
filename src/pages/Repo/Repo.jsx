import Repository from "@/components/Repository/Repository.jsx";
import {useParams} from "react-router-dom";

const Repo = () => {
    const {
        userId,
        repoId,
    } = useParams();

    console.log(userId, repoId);

    return (
        <Repository />
    )
}

export default Repo;