import {memo} from "react";
import {useNavigate} from "react-router-dom";
import "./UserCard.css"

const UserCard = (props) => {
    const {
        id,
        username,
        avatar,
    } = props

    const navigate = useNavigate();

    return (
        <figure
            className="user-card"
            onClick={() => navigate(`/user/${id}`)}
        >
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