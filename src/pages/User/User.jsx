import {useParams} from "react-router-dom";
import UserInfo from "@/components/UserInfo/UserInfo.jsx";
import {useEffect, useState} from "react";
import githubAPI from "@/api/githubAPI.js";

const User = () => {
    const {
        id,
    } = useParams();

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);
    const [followers, setFollowers] = useState(null);

    useEffect(() => {
        if (!id) return;

        setUser(null);

        githubAPI.getUser(id).then(setUser);
        githubAPI.getRepos(id).then(setRepos);
        githubAPI.getFollowers(id, 1, 40).then(setFollowers);
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return <UserInfo
        user={user}
        repos={repos}
        followers={followers}
        setRepos={setRepos}
        setFollowers={setFollowers}
    />;
}

export default User