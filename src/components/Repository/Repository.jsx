import './Repository.css'
import RepositoryCommitsList from "@/components/RepositoryCommitsList/RepositoryCommitsList.jsx";
import {useContext} from "react";
import {RepoContext} from "@/context/RepoContext.jsx";
import {useObserver} from "@/hooks/useObserver.js";
import RepoBranchesList from "@/components/RepositoryBranchesList/RepositoryBranchesList.jsx";
import RepositoryDeploymentsList from "@/components/RepositoryDeploymentsList/RepositoryDeploymentsList.jsx";
import RepositoryReadme from "@/components/RepositoryReadme/RepositoryReadme.jsx";

const Repository = () => {
    const {
        repo,
        repoObserverRef,
        setPage,
        activeTab,
        setActiveTab,
    } = useContext(RepoContext)

    console.log(repo)
    useObserver(setPage, repoObserverRef);

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
                            <RepositoryReadme />
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

                <div className="repo-tabs">

                    <button
                        className={`repo-tabs__tab ${activeTab === "commits" ? "is-active" : ""}`}
                        onClick={() => setActiveTab("commits")}
                    >
                        <span className="repo-tabs__icon">📝</span>
                        Commits
                    </button>

                    <button
                        className={`repo-tabs__tab ${activeTab === "branches" ? "is-active" : ""}`}
                        onClick={() => setActiveTab("branches")}
                    >
                        <span className="repo-tabs__icon">🌿</span>
                        Branches
                    </button>

                    <button
                        className={`repo-tabs__tab ${activeTab === "deployments" ? "is-active" : ""}`}
                        onClick={() => setActiveTab("deployments")}
                    >
                        <span className="repo-tabs__icon">🚀</span>
                        Deployments
                    </button>

                </div>

                {activeTab === "commits" && <RepositoryCommitsList />}
                {activeTab === "branches" && <RepoBranchesList />}
                {activeTab === "deployments" && <RepositoryDeploymentsList />}

            </div>

            <div ref={repoObserverRef}></div>
        </div>
    )
}

export default Repository;