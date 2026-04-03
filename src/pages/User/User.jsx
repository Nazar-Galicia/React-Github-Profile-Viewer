import {useParams} from "react-router-dom";
import UserInfo from "@/components/UserInfo/UserInfo.jsx";
import {useEffect, useState} from "react";
import githubAPI from "@/api/githubAPI.js";

const User = () => {
    const {
        id,
    } = useParams();

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

    if (!user) return <div>Loading...</div>;

    return <UserInfo
        user={user}
        repos={repos}
        followers={followers}
        setRepos={setRepos}
        setFollowers={setFollowers}
        manyRepos={manyRepos}
    />
}

export default User