import "./Viewer.css"
import UsersList from "@/components/UsersList/UsersList.jsx";

const Viewer = () => {
    return (
        <div className="viewer">
            <div className="viewer__text-wrapper">
                <h1 className="viewer__heading">GitHub Users</h1>
                <p className="viewer__subtitle">Explore and search for github users</p>
            </div>
            <UsersList />
        </div>
    )
}
export default Viewer