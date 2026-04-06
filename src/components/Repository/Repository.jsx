const Repository = (props) => {
    const {
        repo,
    } = props

    return (
        <div className="repo">

            <div className="repo__header">
                <h1 className="repo__title">
                    {repo?.name}
                </h1>

                <a
                    href={repo?.html_url}
                    target="_blank"
                    className="repo__link"
                >
                    View on GitHub
                </a>
            </div>

            <p className="repo__description">
                {repo?.description || "No description"}
            </p>

            <div className="repo__stats">
                <span>⭐ {repo?.stargazers_count}</span>
                <span>⑂ {repo?.forks_count}</span>
                <span>👁 {repo?.watchers_count}</span>
                <span>⚠ {repo?.open_issues_count}</span>
            </div>

            <div className="repo__meta">
                <span>{repo?.language}</span>
                <span>{repo?.license?.name || "No license"}</span>
                <span>{new Date(repo?.created_at).toLocaleDateString()}</span>
            </div>

            <div className="repo__section">
                <h2 className="repo__section-title">Topics</h2>
                <div className="repo__topics">
                    {repo?.topics?.map(topic => (
                        <span key={topic} className="repo__topic">
          {topic}
        </span>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Repository;