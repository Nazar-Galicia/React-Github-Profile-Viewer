import {useContext} from "react";
import {RepoContext} from "@/context/RepoContext.jsx";
import RepositoryBranchCard from "@/components/RepositoryBranchCard/RepositoryBranchCard.jsx";
import './RepositoryBranchesList.css'

const RepoBranchesList = () => {
    const {
        branches,
    } = useContext(RepoContext)

    return (
        <div className="repo-branches">

            <div className="repo-branches__header">
                <h2 className="repo-branches__title">Branches</h2>
                <span className="repo-branches__count">{branches.length}</span>
            </div>

            <div className="repo-branches__list">
                {branches.map(branch => (
                    <RepositoryBranchCard
                        key={branch.name}
                        name={branch.name}
                        commit={branch.commit}
                    />
                ))}
            </div>

        </div>
    )
}

export default RepoBranchesList