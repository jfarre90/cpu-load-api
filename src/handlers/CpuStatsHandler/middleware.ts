import osu from 'node-os-utils';
import os from 'os';
import { CpuUsageStats } from './types';

export const collectCpuStats: () => Promise<CpuUsageStats> = async () => {
  const cpu = osu.cpu;

  const averageUsage15min = cpu.loadavgTime(15);
  const uptime = os.uptime();

  const currentUsage = await cpu.usage();
  return { currentUsage, averageUsage15min, uptime };
};
