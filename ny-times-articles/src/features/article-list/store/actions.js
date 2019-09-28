import { fetchArticlesData } from '../../../services/Api';
import { actionTypes } from './types';

const { FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILED } = actionTypes;

const fetchArticlesStart = () => ({
  type: FETCH_ARTICLES_START
});

const fetchArticlesSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articles
});

const fetchArticlesFailed = () => ({
  type: FETCH_ARTICLES_FAILED
});

export const fetchArticles = () => {
  return async dispatch => {
    try {
      dispatch(fetchArticlesStart())
      const response = await fetchArticlesData()
      dispatch(fetchArticlesSuccess(response.data.results))

    } catch (error) {
      dispatch(fetchArticlesFailed(error))
    }
  }
}
