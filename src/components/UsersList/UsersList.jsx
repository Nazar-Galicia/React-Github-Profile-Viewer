import UserCard from "@/components/UserCard/UserCard.jsx";
import './UsersList.css'

const UsersList = () => {
    const users = [
        { username: "user1", avatar: "https://i.pravatar.cc/150?img=1", bio: "Frontend dev", tech: "JS", repos: 12 },
        { username: "user2", avatar: "https://i.pravatar.cc/150?img=2", bio: "Backend dev", tech: "Python", repos: 8 },
        { username: "user3", avatar: "https://i.pravatar.cc/150?img=3", bio: "Fullstack dev", tech: "Node", repos: 21 },
        { username: "user4", avatar: "https://i.pravatar.cc/150?img=4", bio: "UI Designer", tech: "Figma", repos: 5 },
        { username: "user5", avatar: "https://i.pravatar.cc/150?img=5", bio: "React dev", tech: "React", repos: 14 },
        { username: "user6", avatar: "https://i.pravatar.cc/150?img=6", bio: "DevOps", tech: "Docker", repos: 9 },
        { username: "user7", avatar: "https://i.pravatar.cc/150?img=7", bio: "Mobile dev", tech: "Flutter", repos: 11 },
        { username: "user8", avatar: "https://i.pravatar.cc/150?img=8", bio: "Game dev", tech: "Unity", repos: 6 },
        { username: "user9", avatar: "https://i.pravatar.cc/150?img=9", bio: "Frontend dev", tech: "Vue", repos: 17 },
        { username: "user10", avatar: "https://i.pravatar.cc/150?img=10", bio: "Backend dev", tech: "Go", repos: 13 },
        { username: "user11", avatar: "https://i.pravatar.cc/150?img=11", bio: "Fullstack dev", tech: "MERN", repos: 19 },
        { username: "user12", avatar: "https://i.pravatar.cc/150?img=12", bio: "UI Designer", tech: "UX", repos: 7 },
        { username: "user13", avatar: "https://i.pravatar.cc/150?img=13", bio: "React dev", tech: "Next.js", repos: 15 },
        { username: "user14", avatar: "https://i.pravatar.cc/150?img=14", bio: "DevOps", tech: "Kubernetes", repos: 10 },
        { username: "user15", avatar: "https://i.pravatar.cc/150?img=15", bio: "Mobile dev", tech: "Swift", repos: 8 },
        { username: "user16", avatar: "https://i.pravatar.cc/150?img=16", bio: "Game dev", tech: "Unreal", repos: 4 },
        { username: "user17", avatar: "https://i.pravatar.cc/150?img=17", bio: "Frontend dev", tech: "Svelte", repos: 12 },
        { username: "user18", avatar: "https://i.pravatar.cc/150?img=18", bio: "Backend dev", tech: "Java", repos: 20 },
        { username: "user19", avatar: "https://i.pravatar.cc/150?img=19", bio: "Fullstack dev", tech: "Laravel", repos: 16 },
        { username: "user20", avatar: "https://i.pravatar.cc/150?img=20", bio: "UI Designer", tech: "Illustrator", repos: 6 },
        { username: "user21", avatar: "https://i.pravatar.cc/150?img=21", bio: "React dev", tech: "Redux", repos: 18 },
        { username: "user22", avatar: "https://i.pravatar.cc/150?img=22", bio: "DevOps", tech: "AWS", repos: 11 },
        { username: "user23", avatar: "https://i.pravatar.cc/150?img=23", bio: "Mobile dev", tech: "Kotlin", repos: 9 },
        { username: "user24", avatar: "https://i.pravatar.cc/150?img=24", bio: "Game dev", tech: "C#", repos: 7 },
        { username: "user25", avatar: "https://i.pravatar.cc/150?img=25", bio: "Frontend dev", tech: "HTML/CSS", repos: 22 },
        { username: "user26", avatar: "https://i.pravatar.cc/150?img=26", bio: "Backend dev", tech: "Rust", repos: 5 },
        { username: "user27", avatar: "https://i.pravatar.cc/150?img=27", bio: "Fullstack dev", tech: "Django", repos: 14 },
        { username: "user28", avatar: "https://i.pravatar.cc/150?img=28", bio: "UI Designer", tech: "Photoshop", repos: 6 },
        { username: "user29", avatar: "https://i.pravatar.cc/150?img=29", bio: "React dev", tech: "TypeScript", repos: 17 },
        { username: "user30", avatar: "https://i.pravatar.cc/150?img=30", bio: "DevOps", tech: "CI/CD", repos: 13 }
    ];

    return (
        <div className="users-list">
            {
                users.map(({
                    username,
                    avatar,
                    bio,
                    tech,
                    repos
                }) => (
                    <UserCard
                        username={username}
                        avatar={avatar}
                        bio={bio}
                        tech={tech}
                        repos={repos}
                    />
                ))
            }
        </div>
    )
}
export default UsersList