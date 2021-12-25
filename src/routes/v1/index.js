import { Router } from 'express';
import MovieRoute from './movies';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome To Swapi' });
});

router.use('/movies', MovieRoute);

export default router;
