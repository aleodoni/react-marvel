export function getCharactersRequest(page, searchString) {
  return {
    type: '@characters/REQUEST',
    payload: { page, searchString },
  };
}

export function getCharactersSuccess(characters, total, searchString) {
  return {
    type: '@characters/SUCCESS',
    payload: { characters, total, searchString },
  };
}

export function getCharactersFailure() {
  return {
    type: '@characters/FAILURE',
  };
}

export function resetPage() {
  return {
    type: '@characters/RESET_PAGE',
  };
}
