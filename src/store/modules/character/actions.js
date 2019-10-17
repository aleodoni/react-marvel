export function getCharacterRequest(characterId) {
  return {
    type: '@character/REQUEST',
    payload: { characterId },
  };
}

export function getCharacterSuccess(character) {
  return {
    type: '@character/SUCCESS',
    payload: { character },
  };
}

export function getCharacterFailure() {
  return {
    type: '@character/FAILURE',
  };
}
