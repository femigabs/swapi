import getCharacter from '../services/character.services';
import constants from '../utils/constants/messages';
import { successResponse } from '../utils/response';

/**
 * Controller to fetch character
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
const fetchCharacter = async (req, res, next) => {
  try {
    const data = await getCharacter(req.query);
    successResponse(
      res, constants.FETCH_SUCCESS('Characters'), 200, data,
    );
  } catch (error) {
    next(error);
  }
};

export default fetchCharacter;
