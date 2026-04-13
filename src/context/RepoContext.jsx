import {createContext, useEffect, useMemo, useRef, useState} from "react";
import {useCommits} from "@/hooks/useCommits.js";
import {useGetCommits} from "@/hooks/useGetCommits.js";
import {useParams} from "react-router-dom";

export const RepoContext = createContext(null);

const RepoProvider = (props) => {
    const {
        children
    } = props

    const {
        userId,
        repoId,
    } = useParams();

    const {
        repo,
    } = useGetCommits(userId, repoId)

    const {
        commits,
        setPage,
    } = useCommits(userId, repoId)

    const value = useMemo(() => {
        return {
            repo,
            commits,
            repoObserverRef,
            setPage,
        }
    }, [
        repo,
        commits,
        repoObserverRef,
        setPage,
    ])

    return (
        <RepoContext.Provider
            value={value}
        >
            {children}
        </RepoContext.Provider>
    )
};

export default RepoProvider;