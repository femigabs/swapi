/* eslint-disable import/no-cycle */
import { Router } from 'express';
import * as MovieController from '../../controllers/movie.controllers';
import * as CommentValidator from '../../validations/comment.validators';

const router = Router();

router.get('/', MovieController.fetchMovies);

router.post(
  '/:episodeId/comment',
  CommentValidator.commentParams,
  CommentValidator.addComment,
  MovieController.addComment,
);

router.get(
  '/:episodeId/comment',
  CommentValidator.commentParams,
  MovieController.getMovieComments,
);

export default router;
