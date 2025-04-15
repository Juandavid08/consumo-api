import React, { useState, useEffect } from 'react';
import '../styles/UserList.css';

const API_URL = process.env.REACT_APP_API_URL;

const UserList = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`${API_URL}/users?page=${page}`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.data.filter(user =>
          user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setUsers(filtered);
        setTotalPages(data.total_pages);
      });
  }, [page, searchTerm]);

  return (
    <div className="user-list-container">
      <div className="user-grid">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt="avatar" width="50" />
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i} 
            onClick={() => setPage(i + 1)} 
            className={page === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
