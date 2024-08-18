import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onSearchChange }) => {
  const handleSearchInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className='navbar'>
      <div className='nav-dir'>
        <h1>Home &gt;<span id='nav-dash'> Dashboard</span></h1>
      </div>
      <div className='nav-menu'>
        <input
          type='text'
          placeholder='🔍 Search anything...'
          className='nav-search'
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
