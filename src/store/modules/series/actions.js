export function getSeriesRequest(characterId, page) {
  return {
    type: '@series/REQUEST',
    payload: { characterId, page },
  };
}

export function getSeriesSuccess(series, total, page) {
  return {
    type: '@series/SUCCESS',
    payload: { series, total, page },
  };
}

export function getSeriesFailure() {
  return {
    type: '@series/FAILURE',
  };
}

export function reserSeries() {
  return {
    type: '@series/RESET',
  };
}
