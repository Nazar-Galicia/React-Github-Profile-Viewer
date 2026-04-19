import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {useContext} from "react";
import {RepoContext} from "@/context/RepoContext.jsx";
import './RepositoryReadme.css'

const RepositoryReadme = () => {
    const {
        readme
    } = useContext(RepoContext)

    if (!readme) return <span>No readme.md</span>

    return (
        <div className="repo-readme">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {readme}
            </ReactMarkdown>
        </div>
    )
}

export default RepositoryReadme