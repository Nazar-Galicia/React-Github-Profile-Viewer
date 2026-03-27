import {memo} from "react";
import './UserReposCard.css'

const UserReposCard = (props) => {
    const {
        name,
        description,
        language,
        stargazersCount,
    } = props

    const languageMeta = [
        { name: "JavaScript", color: "#f7df7a", icon: "devicon-javascript-plain" },
        { name: "TypeScript", color: "#5aa9ff", icon: "devicon-typescript-plain" },
        { name: "Python", color: "#6fa8dc", icon: "devicon-python-plain" },
        { name: "Java", color: "#d19a66", icon: "devicon-java-plain" },
        { name: "C", color: "#9ca3af", icon: "devicon-c-plain" },
        { name: "C++", color: "#ff7aa2", icon: "devicon-cplusplus-plain" },
        { name: "C#", color: "#4cd137", icon: "devicon-csharp-plain" },
        { name: "Go", color: "#66d9ff", icon: "devicon-go-plain" },
        { name: "Rust", color: "#f5c07a", icon: "devicon-rust-plain" },
        { name: "PHP", color: "#8892d6", icon: "devicon-php-plain" },
        { name: "Ruby", color: "#ff6b6b", icon: "devicon-ruby-plain" },
        { name: "Swift", color: "#ffb86c", icon: "devicon-swift-plain" },
        { name: "Kotlin", color: "#c792ea", icon: "devicon-kotlin-plain" },
        { name: "Dart", color: "#4de0d2", icon: "devicon-dart-plain" },
        { name: "Scala", color: "#ff5c5c", icon: "devicon-scala-plain" },
        { name: "Shell", color: "#b8f77a", icon: "devicon-bash-plain" },
        { name: "HTML", color: "#ff8c66", icon: "devicon-html5-plain" },
        { name: "CSS", color: "#7aa2f7", icon: "devicon-css3-plain" },
        { name: "SCSS", color: "#ff8cc6", icon: "devicon-sass-original" },
        { name: "Vue", color: "#6ee7b7", icon: "devicon-vuejs-plain" },
        { name: "React", color: "#61dafb", icon: "devicon-react-original" },
        { name: "Angular", color: "#ff6b6b", icon: "devicon-angularjs-plain" },
        { name: "Svelte", color: "#ff7f50", icon: "devicon-svelte-plain" },
        { name: "Next.js", color: "#ffffff", icon: "devicon-nextjs-original" },
        { name: "Node.js", color: "#8cc84b", icon: "devicon-nodejs-plain" },
        { name: "Express", color: "#aaaaaa", icon: "devicon-express-original" },
        { name: "MongoDB", color: "#6ee7b7", icon: "devicon-mongodb-plain" },
        { name: "PostgreSQL", color: "#7aa2f7", icon: "devicon-postgresql-plain" },
        { name: "MySQL", color: "#67e8f9", icon: "devicon-mysql-plain" },
        { name: "Firebase", color: "#ffca28", icon: "devicon-firebase-plain" },
        { name: "Dockerfile", color: "#6c8ebf", icon: "devicon-docker-plain" },
        { name: "Kubernetes", color: "#5aa9ff", icon: "devicon-kubernetes-plain" },
        { name: "GraphQL", color: "#ff79c6", icon: "devicon-graphql-plain" },
        { name: "Redux", color: "#c792ea", icon: "devicon-redux-original" },
        { name: "Webpack", color: "#8dd6f9", icon: "devicon-webpack-plain" },
        { name: "Vite", color: "#a78bfa", icon: "devicon-vitejs-plain" },
        { name: "Linux", color: "#facc15", icon: "devicon-linux-plain" },
        { name: "Ubuntu", color: "#ff6b35", icon: "devicon-ubuntu-plain" },
        { name: "Windows", color: "#4da6ff", icon: "devicon-windows8-original" },
        { name: "Git", color: "#f97316", icon: "devicon-git-plain" },
        { name: "GitHub", color: "#ffffff", icon: "devicon-github-original" }
    ];

    const getLangMeta = (lang) => {
        return languageMeta.find(l => l.name === lang) || {
            color: "#6b7280",
            icon: null
        };
    };

    const meta = getLangMeta(language);

    return (
        <figure className="repo-card">

            <div className="repo-card__header">
                <figcaption className="repo-card__name">{name}</figcaption>
            </div>

            <p className="repo-card__desc">
                {description || "No description"}
            </p>

            <div className="repo-card__meta">
                <div
                    className="repo-lang"
                    style={{
                        backgroundColor: meta.color + "20",
                        color: meta.color
                    }}
                >
                    {meta.icon && <i className={`${meta.icon} repo-lang__icon`} />}
                    {language || "Unknown"}
                </div>

                <span>★ {stargazersCount}</span>
            </div>

        </figure>
    )
}

export default memo(UserReposCard);