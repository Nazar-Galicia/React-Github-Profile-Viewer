import {useParams} from "react-router-dom";
import {useEffect, useRef} from "react";
import githubAPI from "@/api/githubAPI.js";

const User = () => {
    const {
        id,
    } = useParams();

    const userVar = useRef([])

    useEffect(() => {
        githubAPI.getUser(id).then((user) => {
            userVar.current = user;
            console.log(userVar.current);
        })
    }, [])

    return (
        <h1>User page: {userVar.current}</h1>
    )
}

export default User