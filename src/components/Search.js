import React from 'react';

import '../assets/css/Search.css';

const Search = props => {
  const { onChange } = props;

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <form onSubmit={event => handleSubmit(event)} className="search-form">
      <input
        type="text"
        placeholder="Search"
        onChange={event => handleChange(event)}
      />
    </form>
  );
};
export default Search;
