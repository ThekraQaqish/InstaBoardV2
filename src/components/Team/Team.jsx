import React, { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import './Team.css';
import axios from 'axios';

export default function Team({ darkMode, toggleDarkMode }) {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [numOfResults, setNumOfResults] = useState('12');

  function handleNumOfResultsChange(e) {
    const value = e.target.value;
    if (value === '') {
      setNumOfResults('');
      return;
    }
    const numberValue = Number(value);
    if (numberValue >= 1 && numberValue <= 100) {
      setNumOfResults(value);
    } else {
      alert('Please enter a number between 1 and 100');
    }
  }

  useEffect(() => {
    setPageNumber(0);
    setUsers([]);
  }, [numOfResults]);

  useEffect(() => {
    const resultsCount = Number(numOfResults);
    if (resultsCount > 0) {
      async function fetchUsers() {
        const response = await axios.get(
          `https://randomuser.me/api/?page=${pageNumber + 1}&results=${resultsCount}`
        );
        setUsers((prev) =>
          pageNumber === 0 ? response.data.results : [...prev, ...response.data.results]
        );
      }
      fetchUsers();
    }
  }, [pageNumber, numOfResults]);

  function handlePageNumber() {
    setPageNumber((pageNum) => pageNum + 1);
  }

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`wrapper ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="listTitle">Insta Board</h1>

      <div className="headerx">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="12"
          value={numOfResults}
          onChange={handleNumOfResultsChange}
          className="search-input"
        />
        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="CardsContainer">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.login.uuid}
            user={user}
            darkMode={darkMode}
          />
        ))}
      </div>

      <div className="loadMoreWrapper">
        <button className="load-more-btn">Load More</button>
      </div>
    </div>
  );
}