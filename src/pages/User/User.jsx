import {useParams} from "react-router-dom";
import UserInfo from "@/components/UserInfo/UserInfo.jsx";
import {useGetUserData} from "@/hooks/useGetUserData.js";

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