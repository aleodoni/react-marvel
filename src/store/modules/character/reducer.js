import produce from 'immer';

const INITIAL_STATE = {
  characters: [],
};

export default function character(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@character/UPDATE': {
        draft.name = action.payload.name;
        draft.description = action.payload.description;
        break;
      }
      default:
    }
  });
}
