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

export function saveCharacterRequest(characterId, name, description) {
  return {
    type: '@character/SAVE_REQUEST',
    payload: { characterId, name, description },
  };
}

export function saveCharacterSuccess(character) {
  return {
    type: '@character/SAVE_SUCCESS',
    payload: { character },
  };
}

export function saveCharacterFailure() {
  return {
    type: '@character/SAVE_FAILURE',
  };
}
