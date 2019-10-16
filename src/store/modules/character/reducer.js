import produce from 'immer';

const INITIAL_STATE = {
  characters: [],
  page: 1,
  loading: false,
  total: 0,
  pageCount: 0,
  searchString: '',
};

export default function character(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@characters/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@characters/RESET_PAGE': {
        draft.page = 1;
        break;
      }
      case '@characters/SUCCESS': {
        draft.characters = action.payload.characters;
        draft.loading = false;
        draft.total = action.payload.total;
        draft.pageCount = Math.ceil(draft.total / 6);
        // draft.page = 1;
        // if (draft.searchString !== action.payload.searchString) draft.page = 0;
        // else draft.page = action.payload.page;
        draft.searchString = action.payload.searchString;
        break;
      }
      case '@characters/FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
