import { otpCleanerJob } from './otpCleaner';

export const startCronJobs = () => {
  otpCleanerJob();
  console.log('Cron jobs started');
};
