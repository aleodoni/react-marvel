import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import Serie from '../../components/Serie';
import Loading from '../../components/Loading';

import {
  getSeriesRequest,
  reserSeries,
} from '../../store/modules/series/actions';

import history from '../../services/history';

import {
  Container,
  Content,
  Character,
  Image,
  Info,
  Name,
  Desc,
  Series,
  SerieInfo,
  ButtonContainer,
} from './styles';

export default function Detail() {
  const dispatch = useDispatch();

  const page = useSelector(state => state.series.page);
  const pageCount = useSelector(state => state.series.pageCount);
  const character = useSelector(state => state.character.character);
  const series = useSelector(state => state.series.series);
  const loading = useSelector(state => state.series.loading);

  const [serieDetails, setSerieDetails] = useState({});
  const [showSerieDetails, setShowSerieDetails] = useState(false);

  const className = series.length === 0 ? 'hidden' : null;

  const ref = React.createRef();

  useEffect(() => {
    dispatch(getSeriesRequest(character[0].id, page));
    if (ref.current) ref.current.state.selected = 0;
  }, [page, dispatch, character]);

  function handleMouseEnter(serie) {
    setShowSerieDetails(true);
    setSerieDetails(serie);
  }

  function handleMouseLeave() {
    setShowSerieDetails(false);
    setSerieDetails({});
  }

  function handlePageClick({ selected }) {
    dispatch(getSeriesRequest(character[0].id, selected + 1));
  }

  function handleClickVoltar() {
    dispatch(reserSeries());
    history.push('/');
  }

  function geraLoading() {
    if (loading) {
      return <Loading />;
    }
    return (
      <>
        <Series>
          {series.map(serie => (
            <Serie
              key={serie.id}
              title={serie.title}
              startYear={serie.startYear}
              endYear={serie.endYear}
              url={serie.url}
              onMouseEnter={() => handleMouseEnter(serie)}
              onMouseLeave={() => handleMouseLeave()}
            />
          ))}
        </Series>
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

        <SerieInfo>
          {showSerieDetails && (
            <>
              <Name>{serieDetails.title}</Name>
              <Desc>
                Começou em {serieDetails.startYear} e terminou em{' '}
                {serieDetails.endYear}
              </Desc>
            </>
          )}
        </SerieInfo>
      </>
    );
  }

  return (
    <Container>
      <Content>
        <Character>
          <Image>
            <img src={character[0].url} alt="character" />
          </Image>
          <Info>
            <Name>{character[0].name}</Name>
            <Desc>{character[0].description}</Desc>
          </Info>
        </Character>

        {geraLoading()}

        <ButtonContainer>
          <button type="button" className="editar">
            Editar personagem
          </button>
          <button
            type="button"
            className="voltar"
            onMouseDown={handleClickVoltar}
          >
            Voltar à pesquisa
          </button>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
