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
        branches,
    } = useGetCommits(userId, repoId)

    const {
        commits,
        setPage,
        repoObserverRef,
    } = useCommits(userId, repoId)

    const value = useMemo(() => {
        return {
            repo,
            commits,
            repoObserverRef,
            setPage,
            branches,
        }
    }, [
        repo,
        commits,
        repoObserverRef,
        setPage,
        branches,
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