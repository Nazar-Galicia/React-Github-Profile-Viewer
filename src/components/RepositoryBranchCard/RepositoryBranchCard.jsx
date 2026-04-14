import {memo} from "react";
import './RepositoryBranchCard.css'

const RepositoryBranchCard = (props) => {
    const {
        name,
        commit,
    } = props

    return (
        <div className="repo-branches__item">

            <div className="repo-branches__left">
                <span className="repo-branches__icon">🌿</span>

                <div className="repo-branches__info">
                    <span className="repo-branches__name">{name}</span>
                </div>
            </div>

            <div className="repo-branches__right">
                              <span className="repo-branches__commit">
                                {commit.sha.slice(0, 7)}
                              </span>

                <a
                    href={commit.url.replace("api.", "").replace("repos/", "")}
                    target="_blank"
                    rel="noreferrer"
                    className="repo-branches__link"
                >
                    View
                </a>
            </div>

        </div>
    )
}
export default memo(RepositoryBranchCard);