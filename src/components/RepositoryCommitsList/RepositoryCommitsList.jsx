import CommitCard from "@/components/CommitCard/CommitCard.jsx";
import {memo} from "react";
import './RepositoryCommitList.css'

const RepositoryCommitsList = (props) => {
    const {
        commits,
    } = props

    return (
        <div className="repo-commits">

            <div className="repo-commits__header">
                <h2 className="repo-commits__title">Commits</h2>
                <span className="repo-commits__count">{commits.length}</span>
            </div>

            <div className="repo-commits__list">

                {commits.map(commit => (
                    <CommitCard
                        key={commit.sha}
                        commit={commit.commit}
                        author={commit.commit.author}
                        sha={commit.sha}
                        avatarUrl={commit.author?.avatar_url}
                        htmlUrl={commit.html_url}
                    />
                ))}

            </div>

        </div>
    )
}

export default memo(RepositoryCommitsList);