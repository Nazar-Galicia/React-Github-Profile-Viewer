import './Repository.css'
import RepositoryCommitsList from "@/components/RepositoryCommitsList/RepositoryCommitsList.jsx";
import {useCommits} from "@/hooks/useCommits.js";


const Repository = (props) => {
    const {
        repo,
        commits,
        setCommits,
    } = props

    console.log(repo)

    const {
        repoObserverRef,
    } = useCommits(repo, setCommits)

    return (
        <div className="repo-details">

            <div className="repo-details__container">

                <div className="repo-details__header">

                    <div className="repo-details__title-row">
                        <h1 className="repo-details__title">{repo.name}</h1>

                        <span className="repo-details__visibility">
                          {repo.private ? "Private" : "Public"}
                        </span>
                    </div>

                    <p className="repo-details__description">
                        {repo.description || "No description"}
                    </p>

                    <div className="repo-details__actions">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="repo-details__btn"
                        >
                            Open on GitHub
                        </a>
                    </div>

                </div>

                <div className="repo-details__layout">

                    <div className="repo-details__main">

                        <div className="repo-details__stats">
                            <div>⭐ {repo.stargazers_count}</div>
                            <div>🍴 {repo.forks_count}</div>
                            <div>👁 {repo.watchers_count}</div>
                            <div>🐛 {repo.open_issues_count}</div>
                        </div>

                        <div className="repo-details__placeholder">
                            Repository content / README
                        </div>

                    </div>

                    <aside className="repo-details__sidebar">

                        <div className="repo-details__block">
                            <span>Language</span>
                            <strong>{repo.language || "—"}</strong>
                        </div>

                        <div className="repo-details__block">
                            <span>Branch</span>
                            <strong>{repo.default_branch}</strong>
                        </div>

                        <div className="repo-details__block">
                            <span>Size</span>
                            <strong>{repo.size} KB</strong>
                        </div>

                        <div className="repo-details__block">
                            <span>Created</span>
                            <strong>{new Date(repo.created_at).toLocaleDateString()}</strong>
                        </div>

                        <div className="repo-details__block">
                            <span>Updated</span>
                            <strong>{new Date(repo.updated_at).toLocaleDateString()}</strong>
                        </div>

                        <div className="repo-details__owner">
                            <img src={repo.owner.avatar_url} />
                            <span>{repo.owner.login}</span>
                        </div>

                    </aside>

                </div>

                <RepositoryCommitsList commits={commits} />

            </div>

            <div ref={repoObserverRef}></div>
        </div>
    )
}

export default Repository;