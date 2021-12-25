/* eslint-disable import/no-cycle */
import requestIp from 'request-ip';
import * as MovieServices from '../services/movie.services';
import constants from '../utils/constants/messages';
import { successResponse } from '../utils/response';

/**
 * Controller to fetch movies
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const fetchMovies = async (req, res, next) => {
  try {
    const data = await MovieServices.getMovies();
    successResponse(
      res, constants.FETCH_SUCCESS('Movies'), 200, data,
    );
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to add movie comments
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addComment = async (req, res, next) => {
  try {
    const ip = requestIp.getClientIp(req);
    const [data] = await MovieServices.addMovieComment(
      req.params, req.body, ip,
    );
    successResponse(
      res, constants.CREATE_SUCCESS('Comment'), 200, data,
    );
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to fetch movie comments
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const getMovieComments = async (req, res, next) => {
  try {
    const data = await MovieServices.getMovieComments(req.params);
    successResponse(
      res, constants.FETCH_SUCCESS('Comments'), 200, data,
    );
  } catch (error) {
    next(error);
  }
};