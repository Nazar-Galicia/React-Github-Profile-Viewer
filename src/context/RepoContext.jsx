import {createContext, useMemo} from "react";
import {useCommits} from "@/hooks/useCommits.js";
import {useGetRepoData} from "@/hooks/useGetRepoData.js";
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
        deployments,
        readme,
    } = useGetRepoData(userId, repoId)

    console.log(deployments)

    const {
        commits,
        setPage,
        repoObserverRef,
        activeTab,
        setActiveTab,
    } = useCommits(userId, repoId)

    const value = useMemo(() => {
        return {
            repo,
            commits,
            repoObserverRef,
            setPage,
            branches,
            activeTab,
            setActiveTab,
            deployments,
            readme,
        }
    }, [
        repo,
        commits,
        repoObserverRef,
        setPage,
        branches,
        activeTab,
        setActiveTab,
        deployments,
        readme,
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