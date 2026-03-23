import "./UserCard.css"

const UserCard = (props) => {
    const {
        username,
        avatar,
        bio,
        tech,
        repos
    } = props

    return (
        <figure className="user-card">
            <img
                className="user-avatar"
                src={avatar}
                alt="avatar"
            />

            <figcaption className="user-info">
                <h3 className="user-name">{username}</h3>
                <p className="user-bio">{bio}</p>

                <div className="user-meta">
                    <span>{tech}</span>
                    <span>•</span>
                    <span>{repos} repos</span>
                </div>
            </figcaption>

            <div className="arrow">→</div>
        </figure>
    )
}

export default UserCard;