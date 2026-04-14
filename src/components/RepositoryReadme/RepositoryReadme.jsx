import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const RepositoryReadme = (props) => {
    const {
        content,
    } = props

    if (!content) return <span>No readme.md</span>

    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    )
}

export default RepositoryReadme