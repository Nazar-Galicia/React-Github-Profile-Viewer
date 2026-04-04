import {useParams} from "react-router-dom";
import UserInfo from "@/components/UserInfo/UserInfo.jsx";
import {useGetUserData} from "@/hooks/useGetUserData.js";
import Loader from "@/components/Loader/Loader.jsx";

const User = () => {
    const {
        id,
    } = useParams();

    const {
        user,
        repos,
        followers,
        setRepos,
        setFollowers,
        manyRepos,
    } = useGetUserData(id)

    if (!user) return <Loader>Loading GitHub data...</Loader>;

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