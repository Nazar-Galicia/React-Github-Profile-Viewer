import './SearchUser.css'

const SearchUser = () => {
    return (
        <form className="viewer__search-user-form">
            <div className="viewer__search-user-input">
                <svg className="viewer__search-user-input-icon" viewBox="0 0 24 24">
                    <path d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>

                <input
                    type="text"
                    placeholder="Search GitHub users..."
                    className="viewer__search-user-input-field"
                />
            </div>
        </form>
    )
}

export default SearchUser