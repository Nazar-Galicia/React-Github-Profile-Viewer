const UserInfo = (props) => {
    const {
        user,
        repos,
    } = props

    console.log(user, repos)

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

            <div className="user__repos">

                <h2 className="user__repos-title">Repositories</h2>

                <div className="user__repos-list">
                    {repos?.map(repo => (
                        <div key={repo.id} className="repo-card">

                            <div className="repo-card__header">
                                <h3 className="repo-card__name">{repo.name}</h3>
                            </div>

                            <p className="repo-card__desc">
                                {repo.description || "No description"}
                            </p>

                            <div className="repo-card__meta">
                                <span>{repo.language || "Unknown"}</span>
                                <span>★ {repo.stargazers_count}</span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default UserInfo