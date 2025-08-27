import { useState, useEffect } from 'react';
import UserCard from '../UserCard/UserCard';
import './LikedUsers.css'; 

export default function LikedUsers({ darkMode }) {
    const [likedUsers, setLikedUsers] = useState([]);

    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem('likedUsers')) || [];
        setLikedUsers(storedLikes);
    }, []);

    return (
        <div className={`wrapper ${darkMode ? 'dark' : 'light'}`}>
            <h1 className="listTitle">Liked Users</h1>
            <div className="CardsContainer">
                {likedUsers.length > 0 ? (
                    likedUsers.map((user) => (
                        <UserCard
                            key={user.login.uuid}
                            user={user}
                            darkMode={darkMode}
                            onUnlike={(id) => {
                            setLikedUsers(prev => prev.filter(u => u.login.uuid !== id));
                        }}
                        />
                    ))
                ) : (
                    <p>No liked users yet.</p>
                )}
            </div>
        </div>
    );
}
