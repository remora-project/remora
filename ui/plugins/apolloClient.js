import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const defaultOptions = {
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

export default new ApolloClient({
  link: new HttpLink({
    uri: `http://${window.location.hostname}:3000/graphql`,
  }),
  cache: new InMemoryCache(),
  defaultOptions,
});
