import './CommitCard.css'

const CommitCard = (props) => {
    const {
        avatarUrl,
        commit,
        author,
        sha,
        htmlUrl,
    } = props

    return (
        <div className="repo-commits__item">

            <div className="repo-commits__timeline">
                <div className="repo-commits__dot"></div>
            </div>

            <div className="repo-commits__content">

                <div className="repo-commits__top">

                    <img
                        className="repo-commits__avatar"
                        src={avatarUrl}
                        alt={author.name}
                    />

                    <div className="repo-commits__meta">

                                  <span className="repo-commits__author">
                                    {author.name}
                                  </span>
                        <span className="repo-commits__date">
                                        {new Date(author.date).toLocaleDateString()}
                                    </span>
                    </div>

                </div>

                <div className="repo-commits__message">
                    {commit.message}
                </div>

                <div className="repo-commits__bottom">

                            <span className="repo-commits__sha">
                              {sha.slice(0, 7)}
                            </span>

                    <a
                        href={htmlUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="repo-commits__link"
                    >
                        View commit
                    </a>

                </div>

            </div>

        </div>
    )
}

export default CommitCard;