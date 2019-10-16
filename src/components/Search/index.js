import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';
import { getCharactersRequest } from '../../store/modules/character/actions';

export default function Search({ handleSearch }) {
  const dispatch = useDispatch();

  const searchString = useSelector(state => state.character.searchString);
  const [search, setSearch] = useState(searchString);

  // function handleSearch() {
  //   dispatch(getCharactersRequest(1, search));
  // }

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
