import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import schema from './graphql';

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = 'mongodb://127.0.0.1/graphql-test';

mongoose.connect(DB_URI, {
  useCreateIndex: true,
  useNewUrlParse: true,
}).then(()=>{
  console.log('MongoDB connected');
}).catch(err=>{
  console.error(err);
});

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});
