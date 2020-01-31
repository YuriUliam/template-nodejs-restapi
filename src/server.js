import 'dotenv/config';

import app from './app';

const { APP_PORT = 3000 } = process.env;

app.listen(APP_PORT, () => {
  console.log(`Node.js Rest API listening at ${APP_PORT}`);
});
