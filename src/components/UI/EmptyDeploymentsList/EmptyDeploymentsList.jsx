import './EmptyDeploymentsList.css'

const EmptyDeploymentsList = () => {
    return (
        <div className="repo-deployments__empty">
            <div className="repo-deployments__empty-icon">🚀</div>

            <div className="repo-deployments__empty-text">
                No deployments yet
            </div>

            <div className="repo-deployments__empty-subtext">
                This repository hasn’t been deployed
            </div>
        </div>
    )
}

export default EmptyDeploymentsList