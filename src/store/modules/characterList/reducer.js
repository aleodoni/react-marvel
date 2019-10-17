import produce from 'immer';

const INITIAL_STATE = {
  characters: [],
  page: 1,
  loading: false,
  total: 0,
  pageCount: 0,
  searchString: '',
};

export default function characterList(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@characters/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@characters/SUCCESS': {
        draft.characters = action.payload.characters;
        draft.loading = false;
        draft.total = action.payload.total;
        draft.pageCount = Math.ceil(draft.total / 6);
        draft.searchString = action.payload.searchString;
        draft.page = action.payload.page;
        break;
      }
      case '@characters/FAILURE': {
        draft.loading = false;
        break;
      }
      case '@characters/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@characters/SAVE_SUCCESS': {
        const { updatedCharacters } = action.payload;
        draft.characters = updatedCharacters;
        draft.loading = false;
        break;
      }
      case '@characters/SAVE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
