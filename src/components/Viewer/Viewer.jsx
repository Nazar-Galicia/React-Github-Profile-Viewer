import UsersList from "@/components/UsersList/UsersList.jsx";
import {useEffect, useRef, useState} from "react";
import githubAPI from "@/api/githubAPI";
import "./Viewer.css"
import SearchUser from "@/components/SearchUser/SearchUser.jsx";

const Viewer = () => {
    const observerRef = useRef(null);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setPage((prevState) => prevState + 1);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, []);

    const [users, setUsers] = useState([]);
    const perPage = 40;

    useEffect(() => {
        console.log(page)
        githubAPI.getUsers(page, perPage).then((users) => {
            setUsers(prev => {
                const merged = [...prev, ...users];

                return [...new Map(merged.map(u => [u.id, u])).values()];
            });
            console.log(users)
        })
    }, [page])

    return (
        <div className="viewer">
            <div className="container">
                <div className="viewer__text-wrapper">
                    <h1 className="viewer__heading">GitHub Users</h1>
                    <p className="viewer__subtitle">Explore and search for github users</p>
                </div>
                <SearchUser />
                <UsersList users={users} />
            </div>
            <div ref={observerRef}></div>
        </div>
    )
}
export default Viewer