import './UserFollowerCard.css'

const UserFollowerCard = (props) => {
    const {
        avatar,
        login,
    } = props

    return (
        <figure className="follower-card">
            <img src={avatar} alt="" />
            <figcaption>{login}</figcaption>
        </figure>
    )
}

export default UserFollowerCard;