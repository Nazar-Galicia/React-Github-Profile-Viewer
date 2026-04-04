import './Loader.css'

const Loader = (props) => {
    const {
        children
    } = props

    return (
        <div className="loader">
            <div className="loader__spinner"></div>

            <p className="loader__text">
                {children}
            </p>
        </div>
    )
}

export default Loader;