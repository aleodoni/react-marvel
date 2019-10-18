import reducer, {
  INITIAL_STATE,
} from '../../../store/modules/characterList/reducer';

import * as characterLists from '../../../store/modules/characterList/actions';

describe('Character reducer', () => {
  it('@characters/REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      characterLists.getCharactersRequest(1, 'deadp')
    );
    expect(state.page).toStrictEqual(1);
    expect(state.loading).toStrictEqual(true);
  });

  it('@characters/SUCCESS', () => {
    const characters = [
      {
        id: 111222,
        name: 'Deadpool',
        url: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg',
        description: '',
      },
    ];
    const state = reducer(
      INITIAL_STATE,
      characterLists.getCharactersSuccess(characters, 1, 'deadp', 1)
    );
    expect(state.characters).toStrictEqual(characters);
    expect(state.loading).toStrictEqual(false);
    expect(state.total).toStrictEqual(1);
    expect(state.pageCount).toStrictEqual(1);
    expect(state.page).toStrictEqual(1);
  });

  it('@characters/FAILURE', () => {
    const state = reducer(INITIAL_STATE, characterLists.getCharactersFailure());
    expect(state.loading).toStrictEqual(false);
  });

  it('@characters/SAVE_REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      characterLists.saveCharactersRequest(111222, 'Deadpool', '')
    );
    expect(state.loading).toStrictEqual(true);
  });

  it('@characters/SAVE_SUCCESS', () => {
    const arrayCharacter = [];

    const character = {
      id: 111222,
      name: 'Deadpool',
      url: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg',
      description: 'description',
    };

    arrayCharacter.push(character);

    const MODIFIED_STATE = {
      characters: [character],
      page: 1,
      loading: false,
      total: 1,
      pageCount: 0,
      searchString: 'deadp',
    };

    const state = reducer(
      MODIFIED_STATE,
      characterLists.saveCharactersSuccess(arrayCharacter)
    );
    expect(state.characters).toStrictEqual(arrayCharacter);
    expect(state.loading).toStrictEqual(false);
  });

  it('@character/SAVE_FAILURE', () => {
    const state = reducer(
      INITIAL_STATE,
      characterLists.saveCharactersFailure()
    );
    expect(state.loading).toStrictEqual(false);
  });
});
