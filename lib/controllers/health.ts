import {NextFunction, Request, Response} from 'express';

export default {
  async ping(req: Request, res: Response, next: NextFunction) {
    return res.status(200).send('pong');
  },
};
