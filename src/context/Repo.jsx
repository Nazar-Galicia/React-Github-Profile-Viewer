import {createContext, useMemo} from "react";

const RepoContext = createContext(null);

const RepoProvider = (props) => {
    const {
        children
    } = props

    const value = useMemo(() => {
        return {}
    }, [])

    return (
        <RepoContext.Provider
            value={value}
        >
            {children}
        </RepoContext.Provider>
    )
}

export default RepoProvider;