import { Router } from 'express';
import { handleGetCpuStats } from '../handlers/CpuStatsHandler';
export const CpuStatsController: Router = Router({ mergeParams: true });

CpuStatsController.get('/', handleGetCpuStats);
