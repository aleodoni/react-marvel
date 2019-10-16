import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

// import history from '../../services/history';
import { Container } from './styles';
import Character from '../../components/Character';
import Search from '../../components/Search';
import { getCharactersRequest } from '../../store/modules/character/actions';

export default function Main() {
  const dispatch = useDispatch();

  const page = useSelector(state => state.character.page);
  const characters = useSelector(state => state.character.characters);
  const pageCount = useSelector(state => state.character.pageCount);
  const searchString = useSelector(state => state.character.searchString);
  const loading = useSelector(state => state.character.loading);
  const className = characters.length === 0 ? 'hidden' : null;

  console.log(className);

  const ref = React.createRef();

  useEffect(() => {
    console.tron.log('MUDOU PAGINA');
    dispatch(getCharactersRequest(page, searchString));
    if (ref.current) ref.current.state.selected = 0;
  }, []);

  function handleSelectCharacter(id) {
    console.tron.log(id);
  }

  function handlePageClick({ selected }) {
    dispatch(getCharactersRequest(selected + 1, searchString));
  }

  function onHandleSearch(string) {
    dispatch(getCharactersRequest(1, string));
    if (ref.current) ref.current.state.selected = 0;
  }

  return (
    <Container>
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
        forcePage={page}
        ref={ref}
      />
      {className === 'hidden' && (
        <h1>Nenhum herói com o nome &quot;{searchString}&quot; encontrado.</h1>
      )}
    </Container>
  );
}
