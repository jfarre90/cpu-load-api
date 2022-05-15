import { PingController } from './controllers/PingController';
import { CpuStatsController } from './controllers/CpuStatsController';
import { Application, Router } from 'express';

const _routes: [string, Router][] = [
  ['/ping', PingController],
  ['/api/cpu-stats', CpuStatsController],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
