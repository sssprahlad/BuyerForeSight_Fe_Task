import React from 'react'
import './Home.css'
import { useEffect, useState } from 'react'
import { USERS_API } from '../../constants/constant'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";

const Home = () => {
  const [user, setUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigator = useNavigate();

  console.log(user);

  const fetchUsers = async () => {
    try {
      const response = await fetch(USERS_API);
      const data = await response.json();
      console.log(data);
      setAllUsers(data);
      setUser(data);
    } catch (error) {
      console.error('fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    let filteredUsers = allUsers;
    if (searchQuery) {
      filteredUsers = allUsers.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (sortOrder) {
      filteredUsers = filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filteredUsers = filteredUsers.sort((a, b) => b.name.localeCompare(a.name));
    }
    setUser(filteredUsers);
  }, [searchQuery, allUsers, sortOrder]);


  const handleDetailsView = (id) => {
    setUser(id);
    navigator(`/users/${id}`);
    console.log(id, "ids")
  }

  return (
    <div className='main-container'>
      <div className='content-container'>
        <h1 className='home-title'>Home</h1>
        <div className='filter-container'>
          <div className='search-container'>
            <FaSearch />
            <input type="search" placeholder="Search name or email" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <div className='status-container'>
           <h3 className='sort-text'> Sort By Name</h3>
            {sortOrder ? (
              <FaHourglassEnd onClick={() => setSortOrder(!sortOrder)} className='status-icon' />
            ) : (
              <FaHourglassHalf onClick={() => setSortOrder(!sortOrder)} className='status-icon' />
            )}
          </div>

        </div>
        <div className="users-container">
          {Array.isArray(user) && user.length > 0 ? (
            user.map((item) => (
              <div className="user-card" key={item.id}>
                <h2>{item?.name}</h2>
                <p>{item?.email}</p>
                <p>{item?.phone}</p>
                <p>{item?.company?.name}</p>
                <button
                  className="view-btn"
                  onClick={() => handleDetailsView(item?.id)}
                >
                  View Details
                </button>
              </div>
            ))
          ) : searchQuery.length > 0 ? (
            <p className="loading-text">No users found</p>
          ) : (
            <p className="loading-text">Loading...</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Home