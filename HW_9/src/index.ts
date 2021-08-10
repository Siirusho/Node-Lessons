import dotenv from 'dotenv';
import cron from 'node-cron';
import main from './main';

dotenv.config();

cron.schedule('5 * * * * ', async function() {
 await main();
});
