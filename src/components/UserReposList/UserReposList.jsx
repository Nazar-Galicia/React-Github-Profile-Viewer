import UserReposCard from "@/components/UserReposCard/UserReposCard.jsx";
import './UserReposList.css'

const UserReposList = (props) => {
    const {
        repos,
        userId,
    } = props;

    return (
        <div className="user__repos">

            <h2 className="user__repos-title">Repositories</h2>

            <div className="user__repos-list">
                {repos?.map(repo => (
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

export default UserReposList;