import path from 'path';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

export default function(app) {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../ui/index.html'));
  });

  app.post('/graphql', graphqlHTTP({
    schema,
    graphiql: false,
  }));

  app.get('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));
}
