import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { Container, Logo } from './styles';
import Character from '../../components/Character';
import Search from '../../components/Search';
import Loading from '../../components/Loading';
import { getCharactersRequest } from '../../store/modules/characterList/actions';
import { getCharacterRequest } from '../../store/modules/character/actions';

import marvel from '../../assets/images/marvel.jpg';

export default function Main() {
  const dispatch = useDispatch();

  const page = useSelector(state => state.characterList.page);
  const characters = useSelector(state => state.characterList.characters);
  const pageCount = useSelector(state => state.characterList.pageCount);
  const searchString = useSelector(state => state.characterList.searchString);
  const loading = useSelector(state => state.characterList.loading);
  const className = characters && characters.length === 0 ? 'hidden' : null;

  const ref = React.createRef();

  useEffect(() => {
    dispatch(getCharactersRequest(page, searchString));
  }, [page, dispatch, searchString]);

  function handleSelectCharacter(id) {
    dispatch(getCharacterRequest(id));
  }

  function handlePageClick({ selected }) {
    dispatch(getCharactersRequest(selected + 1, searchString));
  }

  function onHandleSearch(string) {
    dispatch(getCharactersRequest(1, string));
    if (ref.current) ref.current.state.selected = 0;
  }

  if (loading) return <Loading />;

  if (ref.current) ref.current.state.selected = 0;

  return (
    <Container>
      <Logo>
        <span>React +</span>
        <img src={marvel} alt="marvel" />
        <span>API</span>
      </Logo>
      <Search handleSearch={onHandleSearch} />
      {characters.map(character => (
        <Character
          key={character.id}
          name={character.name}
          url={character.url}
          handleClick={() => handleSelectCharacter(character.id)}
        />
      ))}
      <ReactPaginate
        className={className}
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={className}
        subContainerClassName="pages pagination"
        activeClassName="active"
        forcePage={page - 1}
        ref={ref}
      />
      {className === 'hidden' && (
        <h1>Nenhum herói com o nome &quot;{searchString}&quot; encontrado.</h1>
      )}
    </Container>
  );
}
