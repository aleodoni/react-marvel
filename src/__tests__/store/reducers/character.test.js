import reducer, {
  INITIAL_STATE,
} from '../../../store/modules/character/reducer';

import * as Characters from '../../../store/modules/character/actions';

describe('Character reducer', () => {
  it('@character/REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      Characters.getCharacterRequest(111222)
    );
    expect(state.page).toStrictEqual(1);
    expect(state.loading).toStrictEqual(true);
  });

  it('@character/SUCCESS', () => {
    const character = {
      id: 111222,
      name: 'Deadpool',
      url: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg',
      description: '',
    };
    const state = reducer(
      INITIAL_STATE,
      Characters.getCharacterSuccess(character)
    );
    expect(state.character).toStrictEqual(character);
    expect(state.loading).toStrictEqual(false);
  });

  it('@character/FAILURE', () => {
    const state = reducer(INITIAL_STATE, Characters.getCharacterFailure());
    expect(state.loading).toStrictEqual(false);
  });

  it('@character/SAVE_REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      Characters.saveCharacterRequest(111222, 'Deadpool', '')
    );
    expect(state.loading).toStrictEqual(true);
  });

  it('@character/SAVE_SUCCESS', () => {
    const arrayCharacter = [];

    const character = {
      id: 111222,
      name: 'Deadpool',
      url: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg',
      description: 'description',
    };

    arrayCharacter.push(character);

    const MODIFIED_STATE = {
      page: 1,
      loading: false,
      character: [{}],
    };

    const state = reducer(
      MODIFIED_STATE,
      Characters.saveCharacterSuccess(character)
    );
    expect(state.character).toStrictEqual(arrayCharacter);
    expect(state.loading).toStrictEqual(false);
  });

  it('@character/SAVE_FAILURE', () => {
    const state = reducer(INITIAL_STATE, Characters.saveCharacterFailure());
    expect(state.loading).toStrictEqual(false);
  });
});
