import {memo} from "react";
import './UserTopReposList.css'
import UserReposCard from "@/components/UserReposCard/UserReposCard.jsx";

const UserTopReposList = (props) => {
    const {
        topRepos,
        userId,
    } = props

    return (
        <div className="top-repos">
            <h2 className="top-repos__title">
                <span className="top-repos__icon">🔥</span>
                Top Repositories
            </h2>

            <div className="top-repos__list">
                {topRepos.map(repo => (
                    <UserReposCard
                        key={repo.id}
                        name={repo.name}
                        userId={userId}
                        description={repo.description}
                        language={repo.language}
                        stargazersCount={repo.stargazers_count}
                    />
                ))}
            </div>
        </div>
    )
}

export default memo(UserTopReposList)