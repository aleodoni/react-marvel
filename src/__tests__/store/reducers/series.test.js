import reducer, { INITIAL_STATE } from '../../../store/modules/series/reducer';

import * as Series from '../../../store/modules/series/actions';

describe('Series reducer', () => {
  it('@series/REQUEST', () => {
    const state = reducer(INITIAL_STATE, Series.getSeriesRequest(111222, 1));
    expect(state.page).toStrictEqual(1);
    expect(state.loading).toStrictEqual(true);
  });

  it('@series/SUCCESS', () => {
    const series = [
      {
        id: 15276,
        title: '5 Ronin (2011)',
        startYear: 2011,
        endYear: 2011,
        url:
          'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
      },
      {
        id: 15276,
        title: '5 Ronin (2011)',
        startYear: 2011,
        endYear: 2011,
        url:
          'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
      },
    ];
    const state = reducer(INITIAL_STATE, Series.getSeriesSuccess(series, 2, 1));
    expect(state.series).toStrictEqual(series);
    expect(state.loading).toStrictEqual(false);
    expect(state.total).toStrictEqual(2);
    expect(state.pageCount).toStrictEqual(1);
    expect(state.page).toStrictEqual(1);
  });

  it('@series/FAILURE', () => {
    const state = reducer(INITIAL_STATE, Series.getSeriesFailure());
    expect(state.loading).toStrictEqual(false);
  });

  it('@series/RESET', () => {
    const state = reducer(INITIAL_STATE, Series.reserSeries());
    expect(state.series).toStrictEqual([]);
    expect(state.loading).toStrictEqual(false);
    expect(state.total).toStrictEqual(0);
    expect(state.page).toStrictEqual(1);
    expect(state.pageCount).toStrictEqual(0);
    expect(state.searchString).toStrictEqual(undefined);
  });
});
