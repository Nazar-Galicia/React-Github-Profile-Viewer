import UserCard from "@/components/UserCard/UserCard.jsx";
import './UsersList.css'

const UsersList = (props) => {
    const {
        users,
    } = props

    console.log(users)

    return (
        <div className="users-list">
            {
                users.map(({
                    id,
                    login,
                    avatar_url,
                }) => (
                    <UserCard
                        key={id}
                        id={id}
                        username={login}
                        avatar={avatar_url}
                    />
                ))
            }
        </div>
    )
}
export default UsersList