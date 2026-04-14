import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {useContext} from "react";
import {RepoContext} from "@/context/RepoContext.jsx";

const RepositoryReadme = () => {
    const {
        readme
    } = useContext(RepoContext)

    if (!readme) return <span>No readme.md</span>

    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {readme}
        </ReactMarkdown>
    )
}

export default RepositoryReadme