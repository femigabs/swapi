/* eslint-disable import/no-cycle */
import * as Helpers from '../utils/helpers/helpers';
import db from '../db';
import queries from '../db/queries/comment';

const getCommentCount = async (data) => db.any(queries.getCommentCount, [data]);

export const getMovies = async () => {
  const { results } = await Helpers.makeRequest(
    'https://swapi.dev/api/films/',
    'GET',
  );
  const movieIds = Helpers.getArrayId(results);
  const commentCount = await getCommentCount(movieIds);
  let data = results;
  data = Helpers.filterData(data);
  data = Helpers.addCommentCountToMovies(data, commentCount);
  data = Helpers.sortArrayByDate(data);
  return data;
};

export const addMovieComment = (params, body, ip) => {
  const { episodeId } = params;
  const { comment } = body;
  return db.any(queries.addComment, [
    episodeId, comment, ip,
  ]);
};

export const getMovieComments = (params) => {
  const { episodeId } = params;
  return db.any(queries.getMovieComments, [episodeId]);
};
