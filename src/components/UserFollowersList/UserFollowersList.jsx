import UserFollowerCard from "@/components/UserFollowerCard/UserFollowerCard.jsx";
import './UserFollowerList.css'

const UserFollowersList = (props) => {
    const {
        followers,
    } = props

    return (
        <div className="followers-list">
            {followers?.map(f => (
                <UserFollowerCard
                    key={f.id}
                    avatar={f.avatar_url}
                    login={f.login}
                />
            ))}
        </div>
    )
}

export default UserFollowersList;