import produce from 'immer';

export const INITIAL_STATE = {
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
      case '@character/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@character/SAVE_SUCCESS': {
        draft.character[0] = action.payload.character;
        draft.loading = false;
        break;
      }
      case '@character/SAVE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
