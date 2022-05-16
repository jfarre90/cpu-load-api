import moment from 'moment';
import osu from 'node-os-utils';
import os from 'os';
import { CpuUsageStats } from './types';

export const collectCpuStats: () => Promise<CpuUsageStats> = async () => {
  const cpu = osu.cpu;

  const currentTime = moment().unix();

  const averageUsage15min = cpu.loadavgTime(15);
  const uptime = os.uptime();

  const currentUsage = await cpu.usage();
  return { currentUsage, currentTime, averageUsage15min, uptime };
};
