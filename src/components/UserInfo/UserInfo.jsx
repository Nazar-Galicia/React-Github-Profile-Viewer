import UserReposList from "@/components/UserReposList/UserReposList.jsx";
import {useEffect, useState} from "react";
import './UserInfo.css'
import UserFollowersList from "@/components/UserFollowersList/UserFollowersList.jsx";
import LoadMoreButton from "@/components/LoadMoreButton/LoadMoreButton.jsx";
import githubApi from "@/api/githubAPI.js";

const UserInfo = (props) => {
    const {
        user,
        repos,
        followers,
        setRepos,
        setFollowers,
    } = props

    console.log(user, repos, followers)

    const [tab, setTab] = useState("repos");
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (tab === "repos") {
            githubApi.getRepos(user.login, page, 40)
                .then(repos => {
                    setRepos(prev => {
                        const merged = [...prev, ...repos];

                        return [...new Map(merged.map(u => [u.id, u])).values()];
                    })
                })
        } else if (tab === "followers") {
            githubApi.getFollowers(user.login, page, 40)
                .then(followers => {
                    setFollowers(prev => {
                        const merged = [...prev, ...followers];

                        return [...new Map(merged.map(u => [u.id, u])).values()];
                    })
                })
        }
    }, [page])

    useEffect(() => {
        setPage(1);
    }, [tab])

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

            <div className="user-tabs">

                <div className="user-tabs__controls">
                    <button
                        className={`user-tabs__btn ${tab === "repos" ? "active" : ""}`}
                        onClick={() => setTab("repos")}
                    >
                        Repositories
                    </button>

                    <button
                        className={`user-tabs__btn ${tab === "followers" ? "active" : ""}`}
                        onClick={() => setTab("followers")}
                    >
                        Followers
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