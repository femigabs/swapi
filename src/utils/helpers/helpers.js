/* eslint-disable max-len */
import axios from 'axios';
import { Error } from '../response';

export const makeRequest = async (url, method, options = {}) => {
  try {
    const { data } = await axios({ url, method, ...options });
    logger.info('Request processed successfully');
    return data;
  } catch (error) {
    const err = Error(
      error.message,
      (error.response) ? error.response.status : 500,
    );
    logger.error('Helpers::makeRequest', err);
    throw err;
  }
};

export const getArrayId = (data) => data.map((el) => el.episode_id);

export const addCommentCountToMovies = (movies, comments) => {
  const result = [];
  movies.forEach((movie) => {
    const comment = comments.find((el) => movie.episode_id === el.episode_id);
    if (comment) {
      result.push({
        ...movie,
        comment_count: Number(comment.total),
      });
    } else {
      result.push({
        ...movie,
        comment_count: 0,
      });
    }
  });
  return result;
};

export const sortArrayByDate = (array) => array.sort((a, b) => {
  const dateA = new Date(a.release_date);
  const dateB = new Date(b.release_date);
  return dateB - dateA;
});

export const filterData = (data) => data.map((el) => ({
  episode_id: el.episode_id,
  title: el.title,
  opening_crawl: el.opening_crawl,
  release_date: el.release_date,
}));
