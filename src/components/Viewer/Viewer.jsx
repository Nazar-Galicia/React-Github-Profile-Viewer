import UsersList from "@/components/UsersList/UsersList.jsx";
import "./Viewer.css"
import SearchUser from "@/components/SearchUser/SearchUser.jsx";
import {useViewer} from "@/hooks/useViewer.js";


const Viewer = () => {

    const {
        observerRef,
        users,
        setUsers,
        setPage,
        isSearching,
        query,
        setQuery,
    } = useViewer()

    return (
        <div className="viewer">
            <div className="container">
                <div className="viewer__text-wrapper">
                    <h1 className="viewer__heading">GitHub Users</h1>
                    <p className="viewer__subtitle">Explore and search for github users</p>
                </div>
                <SearchUser
                    setUsers={setUsers}
                    setPage={setPage}
                    isSearching={isSearching}
                    query={query}
                    setQuery={setQuery}
                />
                <UsersList users={users} />
            </div>
            <div ref={observerRef}></div>
        </div>
    )
}
export default Viewer