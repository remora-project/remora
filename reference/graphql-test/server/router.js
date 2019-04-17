import graphqlHTTP from 'express-graphql';

import schema from './graphql';

export default function route(app, dirname) {
  app.get('/', (req, res) => {
    res.sendFile(`${dirname}/index.html`);
  });

  app.post('/graphql', graphqlHTTP({
    schema,
    graphiql: false,
  }));
};
