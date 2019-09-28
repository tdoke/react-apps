import { makeGet } from './service';

const { REACT_APP_NY_TIMES_MOST_POPULAR_ARTICLES_API, REACT_APP_NY_TIMES_MOST_POPULAR_ARTICLES_API_TOKEN } = process.env;

export const fetchArticlesData = () => makeGet(`${REACT_APP_NY_TIMES_MOST_POPULAR_ARTICLES_API}/mostviewed/all-sections/7.json?api-key=${REACT_APP_NY_TIMES_MOST_POPULAR_ARTICLES_API_TOKEN}`);