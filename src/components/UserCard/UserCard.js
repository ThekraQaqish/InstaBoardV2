import React, { useState, useEffect } from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaEnvelope, FaUser } from 'react-icons/fa';

export default function UserCard({ user, darkMode, onUnlike }) {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const userId = user.login.uuid;

  const [liked, setLiked] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedUsers')) || [];
    const isLiked = storedLikes.some(u => u.login.uuid === userId);
    setLiked(isLiked);
  }, [userId]);

  const toggleLike = () => {
    const storedLikes = JSON.parse(localStorage.getItem('likedUsers')) || [];
    if (liked) {
      const updatedLikes = storedLikes.filter(u => u.login.uuid !== userId);
      localStorage.setItem('likedUsers', JSON.stringify(updatedLikes));
      setLiked(false);
      if (onUnlike) onUnlike(userId);
    } else {
      storedLikes.push(user);
      localStorage.setItem('likedUsers', JSON.stringify(storedLikes));
      setLiked(true);
    }
  };

  const toggleEmail = () => setShowEmail(prev => !prev);
  const toggleViewed = () => setViewed(true);

  return (
    <div className={`Card ${darkMode ? 'dark' : ''}`}>
      <img
        src={user.picture.medium || 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'}
        alt="UserPicture"
      />
      <h2>{fullName}</h2>
      {showEmail && <p>{user.email}</p>}

     <div className="card-buttons">
        <button
            className={`like ${liked ? 'liked' : ''}`}
            onClick={toggleLike}
            title={liked ? 'Unlike' : 'Like'}
        >
            {liked ? <FaHeart className="icon-large" /> : <FaRegHeart className="icon-large" />}
        </button>

        <button
            className="email"
            onClick={toggleEmail}
            title={showEmail ? 'Hide Email' : 'Show Email'}
        >
            <FaEnvelope className="icon-large" />
        </button>

        <Link to={`/team/${userId}`} state={{ user }}>
            <button
            className="profile"
            onClick={toggleViewed}
            title={viewed ? 'Viewed' : 'View Profile'}
            >
            <FaUser className="icon-large" />
            </button>
        </Link>
        </div>
    </div>
  );
}