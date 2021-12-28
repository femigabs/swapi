import { Router } from 'express';
import fetchCharacter from '../../controllers/character.controllers';

const router = Router();

router.get('/', fetchCharacter);

export default router;
