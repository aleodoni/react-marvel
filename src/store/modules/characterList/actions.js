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
