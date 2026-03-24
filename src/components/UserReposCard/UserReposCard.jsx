const UserReposCard = (props) => {
    const {
        name,
        description,
        language,
        stargazersCount,
    } = props

    return (
        <figure className="repo-card">

            <div className="repo-card__header">
                <figcaption className="repo-card__name">{name}</figcaption>
            </div>

            <p className="repo-card__desc">
                {description || "No description"}
            </p>

            <div className="repo-card__meta">
                <span>{language || "Unknown"}</span>
                <span>★ {stargazersCount}</span>
            </div>

        </figure>
    )
}

export default UserReposCard;