import {memo} from "react";

const DeployCard = (props) => {
    const {
        environment,
        description,
        ref,
        sha,
        created_at,
        creator,
        state,
    } = props

    return (
        <div className="repo-deployments__item">

            <div className="repo-deployments__left">
                <span className={`repo-deployments__status repo-deployments__status--${state}`}>
                </span>

                <div className="repo-deployments__info">
            <span className="repo-deployments__env">
              {environment}
            </span>

                    <span className="repo-deployments__desc">
              {description || "No description"}
            </span>
                </div>
            </div>

            <div className="repo-deployments__right">

                <div className="repo-deployments__meta">
            <span className="repo-deployments__branch">
              {ref}
            </span>

                    <span className="repo-deployments__sha">
              {sha.slice(0, 7)}
            </span>
                </div>

                <div className="repo-deployments__bottom">
            <span className="repo-deployments__date">
              {new Date(created_at).toLocaleDateString()}
            </span>

                    <img
                        className="repo-deployments__avatar"
                        src={creator?.avatar_url}
                        alt={creator?.login}
                    />
                </div>

            </div>

        </div>
    )
}

export default memo(DeployCard)