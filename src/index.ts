/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {itemsRouter} from './routes/items.routes';
import {errorHandler} from './middleware/error.middleware';
import {notFoundHandler} from './middleware/notFound.middleware';
import mongoose from 'mongoose';

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/items', itemsRouter);

app.use(errorHandler);
app.use(notFoundHandler);


/**
 * MongoDB stuff
 */

const mongoUri: string = process.env.MONGODB_URI || 'error';

// TODO: better practise to handle this error?
if (!(mongoUri === 'error')) {
  mongoose.connect(
      mongoUri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      },
  ).then(() => {
    console.log('Connected to mongoDB!');
  }).catch((error: Error) => {
    console.error('Cannot connect to the database!', error);
  });
}

/**
 * Server Activation
 */

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/**
 * TODO: Add Webpack HMR Activation (https://webpack.js.org/concepts/hot-module-replacement/)
 * https://auth0.com/blog/use-typescript-to-create-a-secure-api-with-nodejs-and-express-getting-started/
 */
