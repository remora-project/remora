import express from 'express';
import expressGraphQL from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';

import connMongo from './server/mongo';
import schema from './server/graphql';

const app = express();
const PORT = process.env.PORT || 3000;

connMongo();

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
