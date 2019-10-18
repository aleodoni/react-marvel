import produce from 'immer';

export const INITIAL_STATE = {
  series: [],
  page: 1,
  loading: false,
  total: 0,
  pageCount: 0,
};

export default function serieList(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@series/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@series/SUCCESS': {
        draft.series = action.payload.series;
        draft.loading = false;
        draft.total = action.payload.total;
        draft.pageCount = Math.ceil(draft.total / 12);
        draft.page = action.payload.page;
        break;
      }
      case '@series/FAILURE': {
        draft.loading = false;
        break;
      }
      case '@series/RESET': {
        draft.series = [];
        draft.loading = false;
        draft.total = 0;
        draft.page = 1;
        draft.pageCount = 0;
        break;
      }
      default:
    }
  });
}
