import UsersList from "@/components/UsersList/UsersList.jsx";
import "./Viewer.css"

const Viewer = () => {
    return (
        <div className="viewer">
            <div className="container">
                <div className="viewer__text-wrapper">
                    <h1 className="viewer__heading">GitHub Users</h1>
                    <p className="viewer__subtitle">Explore and search for github users</p>
                </div>
                <UsersList />
            </div>
        </div>
    )
}
export default Viewer