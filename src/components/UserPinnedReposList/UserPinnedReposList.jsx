import UserReposCard from "@/components/UserReposCard/UserReposCard.jsx";
import './UserPinnedReposList.css'

const UserPinnedReposList = (props) => {
    const {
        pinnedRepos,
        userId,
    } = props

    return (
        <div className="pinned-list">
            <div className="pinned-list__header">
                <h2 className="pinned-list__title">
                    <span className="pinned-list__icon">📌</span>
                    Pinned Repositories
                </h2>
            </div>

            <div className="pinned-list__grid">
                {
                    pinnedRepos.map(repo => (
                        <UserReposCard
                            key={repo.id}
                            name={repo.name}
                            repoId={repo.id}
                            userId={userId}
                            description={repo.description}
                            language={repo.language}
                            stargazersCount={repo.stargazers_count}
                            pinned={true}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default UserPinnedReposList;