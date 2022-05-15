import { NextFunction, Request, Response, Router } from 'express';
export const IndexController: Router = Router({ mergeParams: true });

IndexController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Index response' });
  } catch (e) {
    next(e);
  }
});
