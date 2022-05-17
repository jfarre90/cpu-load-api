import moment from 'moment';
import osu from 'node-os-utils';
import os from 'os';
import { CpuUsageStats } from './types';

export const collectCpuStats: () => Promise<CpuUsageStats> = async () => {
  const cpu = osu.cpu;
  const currentTime = moment().unix();

  const uptime = os.uptime();
  const loadAverage = cpu.loadavg()[0] / cpu.count();

  const currentUsage = await cpu.usage();
  return { currentUsage, currentTime, loadAverage, uptime };
};
