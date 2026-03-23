import {memo} from "react";
import "./UserCard.css"

const UserCard = (props) => {
    const {
        username,
        avatar,
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
            </figcaption>

            <div className="arrow">→</div>
        </figure>
    )
}

export default memo(UserCard);