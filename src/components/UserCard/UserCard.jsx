const UserCard = () => {
    return (
        <figure className="user-card">
            <img
                className="user-avatar"
                src="https://avatars.githubusercontent.com/u/583231?v=4"
                alt="avatar"
            />

            <figcaption className="user-info">
                <h3 className="user-name">octocat</h3>
                <p className="user-bio">The Octocat</p>

                <div className="user-meta">
                    <span>GitHub</span>
                    <span>•</span>
                    <span>8 repos</span>
                </div>
            </figcaption>

            <div className="arrow">→</div>
        </figure>
    )
}

export default UserCard;