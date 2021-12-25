import HttpStatus from 'http-status-codes';
import { Error } from '../utils/index';

const baseValidator = async (schema, req, res, next, type) => {
  try {
    const getReqType = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    };
    getReqType[type] = await schema.validateAsync(getReqType[type]);
    return next();
  } catch (error) {
    next(
      Error(error.message.replace(/[\"]/gi, ''), HttpStatus.BAD_REQUEST),
    );
  }
};

export default baseValidator;
