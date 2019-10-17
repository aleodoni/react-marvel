import produce from 'immer';

const INITIAL_STATE = {
  page: 1,
  loading: false,
  character: null,
};

export default function character(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@character/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@character/SUCCESS': {
        draft.character = action.payload.character;
        draft.loading = false;
        break;
      }
      case '@character/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
