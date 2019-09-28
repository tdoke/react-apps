import { actionTypes } from './types';
const { FETCH_ARTICLES_SUCCESS } = actionTypes;

const defaultState = {
  articleList: []
}
export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, articleList: [...action.payload] }
    default:
      return state;
  }
}