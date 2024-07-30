import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search tasks..."
    />
  );
};

export default SearchBar;
