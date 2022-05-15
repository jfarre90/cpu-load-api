import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { collectCpuStats } from './middleware';

export const handleGetCpuStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await collectCpuStats();

    res.status(200).json({ data });
  } catch (e) {
    next(e);
  }
};
