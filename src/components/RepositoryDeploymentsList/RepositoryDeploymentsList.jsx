import {useContext, useEffect, useState} from "react";
import {RepoContext} from "@/context/RepoContext.jsx";
import DeployCard from "@/components/DeployCard/DeployCard.jsx";
import githubApi from "@/api/githubAPI.js";
import './RepositorydeploymentsList.css'
import EmptyDeploymentsList from "@/components/UI/EmptyDeploymentsList/EmptyDeploymentsList.jsx";

const RepositoryDeploymentsList = () => {
    const {
        deployments,
    } = useContext(RepoContext)

    const [statuses, setStatuses] = useState([])

    useEffect(() => {
        if (!deployments.length) return

        const fetchStatuses = async () => {
            try {
                const results = await Promise.all(
                    deployments.map(async (dep) => {
                        const res = await githubApi.getRepositoryDeployStatus(dep.statuses_url)

                        return {
                            id: dep.id,
                            state: res?.[0]?.state || "unknown"
                        }
                    })
                )

                const mapped = {}

                results.forEach(item => {
                    mapped[item.id] = item.state
                })

                setStatuses(mapped)

            } catch (e) {
                console.error(e)
            }
        }

        fetchStatuses()
    }, [deployments])

    return (
        <div className="repo-deployments">

            <div className="repo-deployments__header">
                <h2 className="repo-deployments__title">Deployments</h2>
                <span className="repo-deployments__count">{deployments.length}</span>
            </div>

            <div className="repo-deployments__list">
                {deployments.length !== 0 ? deployments.map(dep => {

                    return (
                        <DeployCard
                            key={dep.id}
                            environment={dep.environment}
                            description={dep.description}
                            ref={dep.ref}
                            sha={dep.sha}
                            created_at={dep.created_at}
                            creator={dep.creator}
                            state={statuses[dep.id] || 'loading'}
                        />
                    )
                }) : <EmptyDeploymentsList />}
            </div>

        </div>
    )
}

export default RepositoryDeploymentsList