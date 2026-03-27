import './LoadMoreButton.css'

const LoadMoreButton = (props) => {
    const {
        setPage,
    } = props

    function changePage() {
        setPage(prev => prev + 1)
    }

    return (
        <button onClick={changePage} className="load-more">Load More</button>
    )
}

export default LoadMoreButton;