import React from 'react';
import Proptypes from 'prop-types';

/**
 *
 * @param {*} props
 */
const Search = props => {
  const { onChange } = props;

  /**
   *
   * @param {*} event
   */
  const handleSubmit = event => {
    event.preventDefault();
  };

  /**
   *
   * @param {*} event
   */
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

Search.propTypes = {
  onChange: Proptypes.func
};

export default Search;
