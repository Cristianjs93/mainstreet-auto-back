import express from 'express';
import cors from 'cors';
import routes from './routes';
import { startCronJobs } from './cron';
import prisma from './utils/prisma';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
routes(app);

startCronJobs();

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  server.close(() => {
    console.log('Server closed');
  });
});
