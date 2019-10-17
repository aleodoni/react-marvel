import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import marvel from '../../assets/images/marvel.jpg';

import history from '../../services/history';

import { reserSeries } from '../../store/modules/series/actions';
import { saveCharactersRequest } from '../../store/modules/characterList/actions';

import { Container, Content, Logo, ButtonContainer } from './styles';

export default function Edit() {
  const dispatch = useDispatch();

  const character = useSelector(state => state.character.character);

  const initialData = {
    name: character[0].name,
    description: character[0].description,
  };

  function handleGoStart() {
    dispatch(reserSeries());
    history.push('/');
  }

  function handleClickVoltar() {
    // dispatch(reserSeries());
    history.push('/detail');
  }

  function handleSubmit(data) {
    const { name, description } = data;

    dispatch(saveCharactersRequest(character[0].id, name, description));
  }

  return (
    <Container>
      <Logo onMouseDown={handleGoStart}>
        <span>React +</span>
        <img src={marvel} alt="marvel" />
        <span>API</span>
      </Logo>
      <Content>
        <Form onSubmit={handleSubmit} initialData={initialData}>
          <Input name="name" placeholder="Nome do personagem" />
          <Input
            multiline
            name="description"
            placeholder="Descrição do personagem"
          />
          <ButtonContainer>
            <button type="submit" className="salvar">
              Salvar
            </button>
            <button
              type="button"
              className="voltar"
              onMouseDown={handleClickVoltar}
            >
              Voltar
            </button>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
}
