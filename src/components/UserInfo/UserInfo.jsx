import UserReposList from "@/components/UserReposList/UserReposList.jsx";
import './UserInfo.css'
import UserFollowersList from "@/components/UserFollowersList/UserFollowersList.jsx";
import LoadMoreButton from "@/components/LoadMoreButton/LoadMoreButton.jsx";
import UserTopReposList from "@/components/UserTopReposList/UserTopReposList.jsx";
import UserPinnedReposList from "@/components/UserPinnedReposList/UserPinnedReposList.jsx";
import FollowersIcon from '../../../public/icons/followers.png'
import ReposIcon from '../../../public/icons/repository.png'
import {useUserInfo} from "@/hooks/useUserInfo.js";
import Loader from "@/components/Loader/Loader.jsx";

const UserInfo = (props) => {
    const {
        user,
        repos,
        followers,
        setRepos,
        setFollowers,
        manyRepos,
    } = props

    console.log(user, repos, followers)

    const {
        setTab,
        tab,
        setPage,
        pinnedRepos,
        topRepos,
    } = useUserInfo(setRepos, setFollowers, user, manyRepos);

    return (
        <div className="user">

            <div className="user__header">
                <img
                    className="user__avatar"
                    src={user.avatar_url}
                    alt={user.login}
                />

                <div className="user__info">
                    <h1 className="user__name">{user.login}</h1>
                    <p className="user__bio">{user.bio || "No bio provided"}</p>

                    <div className="user__stats">
                        <span><strong>{user.public_repos}</strong> repos</span>
                        <span><strong>{user.followers}</strong> followers</span>
                        <span><strong>{user.following}</strong> following</span>
                    </div>
                </div>
            </div>

            <div className="user__actions">
                <a
                    href={user.html_url}
                    target="_blank"
                    className="user__btn"
                >
                    View on GitHub
                </a>
            </div>

            <div className="user-main-repositories">
                {/*<UserPinnedReposList pinnedRepos={pinnedRepos} />*/}
                {pinnedRepos ? <UserPinnedReposList pinnedRepos={pinnedRepos} /> : <Loader />}
                <UserTopReposList topRepos={topRepos} />
            </div>

            <div className="user-tabs">

                <div className="user-tabs__controls">
                    <button
                        className={`user-tabs__btn ${tab === "repos" ? "active" : ""}`}
                        onClick={() => setTab("repos")}
                    >
                        Repositories
                        <img className="user-tabs__icon" src={ReposIcon} alt="repo icon"/>
                    </button>

                    <button
                        className={`user-tabs__btn ${tab === "followers" ? "active" : ""}`}
                        onClick={() => setTab("followers")}
                    >
                        Followers
                        <img className="user-tabs__icon" src={FollowersIcon} alt="follower icon"/>
                    </button>
                </div>

            </div>

            <div className="user-tabs__content">
                {tab === "repos" ? <UserReposList repos={repos} /> :
                 tab === "followers" ? <UserFollowersList followers={followers} /> : null}
            </div>

            <LoadMoreButton setPage={setPage}/>
        </div>
    )
}

export default UserInfo