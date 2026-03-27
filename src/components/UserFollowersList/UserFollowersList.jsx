import './UserFollowerList.css'
import UserCard from "@/components/UserCard/UserCard.jsx";

const UserFollowersList = (props) => {
    const {
        followers,
    } = props

    return (
        <div className="followers-list">
            {followers?.map(follower => (
                <UserCard
                    key={follower.id}
                    avatar={follower.avatar_url}
                    username={follower.login}
                />
            ))}
        </div>
    )
}

export default UserFollowersList;