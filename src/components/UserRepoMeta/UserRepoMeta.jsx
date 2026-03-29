import './UserRepoMeta.css'

const UserRepoMeta = (props) => {
    const {
        meta,
        language,
        stargazersCount,
    } = props

    return (
        <div className="repo-card__meta">
            <div
                className="repo-lang"
                style={{
                    backgroundColor: meta.color + "20",
                    color: meta.color
                }}
            >
                {meta.icon && <i className={`${meta.icon} repo-lang__icon`} />}
                {language || "Unknown"}
            </div>

            <span className="repo-stars">★ {stargazersCount}</span>
        </div>
    )
}

export default UserRepoMeta