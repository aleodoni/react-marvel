export function getCharactersRequest(page, searchString) {
  return {
    type: '@characters/REQUEST',
    payload: { page, searchString },
  };
}

export function getCharactersSuccess(characters, total, searchString, page) {
  return {
    type: '@characters/SUCCESS',
    payload: { characters, total, searchString, page },
  };
}

export function getCharactersFailure() {
  return {
    type: '@characters/FAILURE',
  };
}

export function saveCharactersRequest(characterId, name, description) {
  return {
    type: '@characters/SAVE_REQUEST',
    payload: { characterId, name, description },
  };
}

export function saveCharactersSuccess(updatedCharacters) {
  return {
    type: '@characters/SAVE_SUCCESS',
    payload: { updatedCharacters },
  };
}

export function saveCharactersFailure() {
  return {
    type: '@characters/SAVE_FAILURE',
  };
}
