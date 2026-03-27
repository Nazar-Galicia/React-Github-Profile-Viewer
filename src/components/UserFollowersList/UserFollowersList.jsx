import './UserFollowerList.css'
import UserCard from "@/components/UserCard/UserCard.jsx";

const UserFollowersList = (props) => {
    const {
        followers,
    } = props

    return (
        <div className="followers-list">
            {followers?.map(f => (
                <UserCard
                    key={f.id}
                    avatar={f.avatar_url}
                    username={f.login}
                />
            ))}
        </div>
    )
}

export default UserFollowersList;