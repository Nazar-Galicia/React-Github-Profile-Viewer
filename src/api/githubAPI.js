const headers = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "github-profile-viewer",
}
const URL = 'https://api.github.com'

const githubApi = {
    getUsers: (page=1, perPage=10) => {
        return fetch(`${URL}/users?since=${page * perPage + 1}&per_page=${perPage}`, {
            method: 'GET',
            headers,
        }).then(res => res.json())
    },
    getUser: (id) => {
        return fetch(`${URL}/users/${id}`, {
            method: 'GET',
            headers,
        }).then(res => res.json())
    },
    getRepos: (id, page=1, perPage=10) => {
        return fetch(`${URL}/users/${id}/repos?page=${page}&per_page=${perPage}`, {
            method: 'GET',
            headers,
        }).then(res => res.json())
    },
    getFollowers: (id, page=1, perPage=10) => {
        return fetch(`${URL}/users/${id}/followers?page=${page}&per_page=${perPage}`, {
            method: 'GET',
            headers,
        }).then(res => res.json())
    },
    searchUsers: (query, page=1, perPage=10) => {
        return fetch(`${URL}/search/users?q=${query}&page=${page}&per_page=${perPage}`, {
            method: 'GET',
            headers,
        }).then(res => res.json())
    },
    getRepository: (userId, repoId) => {
        return fetch(`${URL}/repos/${userId}/${repoId}`, {
            method: 'GET',
            headers,
        }).then(res => res.json())
    },
    getRepositoryCommits: (userId, repoId, page=1, perPage=10) => {
        return fetch(`${URL}/repos/${userId}/${repoId}/commits?page=${page}&per_page=${perPage}`, {
            method: 'GET',
            headers,
        }).then(res => res.json())
    }
}

export default githubApi