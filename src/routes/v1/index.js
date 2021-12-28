/* eslint-disable import/no-cycle */
import { Router } from 'express';
import MovieRoute from './movie.routes';
import CharacterRoute from './character.routes';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome To Swapi V1' });
});

router.use('/movies', MovieRoute);
router.use('/characters', CharacterRoute);

export default router;
