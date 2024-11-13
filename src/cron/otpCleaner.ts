import cron from 'node-cron';
import prisma from '../utils/prisma';

export const otpCleanerJob = () => {
  cron.schedule('* * * * *', async () => {
    try {
      const now = new Date();

      const deletedOTPs = await prisma.oTP.deleteMany({
        where: {
          expirationTime: {
            lt: now,
          },
        },
      });

      console.log(
        `${deletedOTPs.count} expired OTPs deleted at ${now.toISOString()}`
      );
    } catch (error: any) {
      console.error('Error deleting expired OTPs:', error.message);
    }
  });
};
