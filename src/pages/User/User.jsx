import {useParams} from "react-router-dom";
import UserInfo from "@/components/UserInfo/UserInfo.jsx";
import {useEffect, useState} from "react";
import githubApi from "@/api/githubAPI.js";

const User = () => {
    const {
        id,
    } = useParams();

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        if (!id) return;

        setUser(null);

        githubApi.getUser(id).then(setUser);
        githubApi.getRepos(id).then(setRepos);
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return <UserInfo user={user} repos={repos}/>;
}

export default User