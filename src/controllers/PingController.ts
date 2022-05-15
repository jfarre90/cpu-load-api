import { NextFunction, Request, Response, Router } from 'express';
export const PingController: Router = Router();

PingController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: { status: 'OK' } });
  } catch (e) {
    next(e);
  }
});
