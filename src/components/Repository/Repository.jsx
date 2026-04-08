import './Repository.css'

const Repository = (props) => {
    const {
        repo,
    } = props

    return (
        <div className="repo-details">
            <div className="repo-details__container">

                <div className="repo-details__header">
                    <div className="repo-details__title-block">
                        <h1 className="repo-details__title">{repo.name}</h1>
                        <span className="repo-details__visibility">
          {repo.private ? "Private" : "Public"}
        </span>
                    </div>

                    <p className="repo-details__description">
                        {repo.description || "No description provided"}
                    </p>

                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="repo-details__link"
                    >
                        View on GitHub
                    </a>
                </div>

                <div className="repo-details__stats">
                    <div className="repo-details__stat">
                        <span className="repo-details__stat-icon">⭐</span>
                        <span className="repo-details__stat-value">{repo.stargazers_count}</span>
                    </div>

                    <div className="repo-details__stat">
                        <span className="repo-details__stat-icon">🍴</span>
                        <span className="repo-details__stat-value">{repo.forks_count}</span>
                    </div>

                    <div className="repo-details__stat">
                        <span className="repo-details__stat-icon">👁</span>
                        <span className="repo-details__stat-value">{repo.watchers_count}</span>
                    </div>

                    <div className="repo-details__stat">
                        <span className="repo-details__stat-icon">🐛</span>
                        <span className="repo-details__stat-value">{repo.open_issues_count}</span>
                    </div>
                </div>

                <div className="repo-details__grid">

                    <div className="repo-details__card">
                        <h3 className="repo-details__card-title">General</h3>
                        <ul className="repo-details__list">
                            <li className="repo-details__list-item">
                                Language: {repo.language || "—"}
                            </li>
                            <li className="repo-details__list-item">
                                Default branch: {repo.default_branch}
                            </li>
                            <li className="repo-details__list-item">
                                Size: {repo.size} KB
                            </li>
                        </ul>
                    </div>

                    <div className="repo-details__card">
                        <h3 className="repo-details__card-title">Dates</h3>
                        <ul className="repo-details__list">
                            <li className="repo-details__list-item">
                                Created: {new Date(repo.created_at).toLocaleDateString()}
                            </li>
                            <li className="repo-details__list-item">
                                Updated: {new Date(repo.updated_at).toLocaleDateString()}
                            </li>
                            <li className="repo-details__list-item">
                                Pushed: {new Date(repo.pushed_at).toLocaleDateString()}
                            </li>
                        </ul>
                    </div>

                    <div className="repo-details__card">
                        <h3 className="repo-details__card-title">Owner</h3>
                        <div className="repo-details__owner">
                            <img
                                className="repo-details__owner-avatar"
                                src={repo.owner.avatar_url}
                                alt={repo.owner.login}
                            />
                            <span className="repo-details__owner-name">
                                {repo.owner.login}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repository;