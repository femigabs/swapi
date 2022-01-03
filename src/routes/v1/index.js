/* eslint-disable import/no-cycle */
import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import MovieRoute from './movie.routes';
import CharacterRoute from './character.routes';
import apiDocs from '../../../swagger.json';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome To Swapi V1' });
});

router.use('/movies', MovieRoute);
router.use('/characters', CharacterRoute);
router.use('/docs', swaggerUI.serve, swaggerUI.setup(apiDocs));

export default router;
