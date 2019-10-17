import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function Search({ handleSearch }) {
  const searchString = useSelector(state => state.characterList.searchString);
  const [search, setSearch] = useState(searchString);

  function handleSearchChange(e) {
    const { value } = e.target;
    setSearch(value);
  }

  function handleKeyPressed(e) {
    const { key } = e;
    if (key === 'Enter') {
      handleSearch(search);
    }
  }

  return (
    <Container>
      <input
        type="text"
        name="search"
        placeholder="Procure seu herói favorito"
        onChange={handleSearchChange}
        onKeyPress={handleKeyPressed}
        value={search}
      />
      <button type="button" onClick={() => handleSearch(search)}>
        <MdSearch size={20} />
      </button>
    </Container>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
