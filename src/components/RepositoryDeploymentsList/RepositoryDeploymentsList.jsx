import {useContext} from "react";
import {RepoContext} from "@/context/RepoContext.jsx";

const RepositoryDeploymentsList = () => {
    const {
        deployments,
    } = useContext(RepoContext)

    return (
        <div className="repo-deployments">

            <div className="repo-deployments__header">
                <h2 className="repo-deployments__title">Deployments</h2>
                <span className="repo-deployments__count">{deployments.length}</span>
            </div>

            <div className="repo-deployments__list">
                {deployments.map(dep => (
                    <div key={dep.id} className="repo-deployments__item">

                        <div className="repo-deployments__left">
          {/*<span className={`repo-deployments__status repo-deployments__status--${dep.state}`}>*/}
          {/*</span>*/}

                            <div className="repo-deployments__info">
            <span className="repo-deployments__env">
              {dep.environment}
            </span>

                                <span className="repo-deployments__desc">
              {dep.description || "No description"}
            </span>
                            </div>
                        </div>

                        <div className="repo-deployments__right">

                            <div className="repo-deployments__meta">
            <span className="repo-deployments__branch">
              {dep.ref}
            </span>

                                <span className="repo-deployments__sha">
              {dep.sha.slice(0, 7)}
            </span>
                            </div>

                            <div className="repo-deployments__bottom">
            <span className="repo-deployments__date">
              {new Date(dep.created_at).toLocaleDateString()}
            </span>

                                <img
                                    className="repo-deployments__avatar"
                                    src={dep.creator?.avatar_url}
                                    alt={dep.creator?.login}
                                />
                            </div>

                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default RepositoryDeploymentsList