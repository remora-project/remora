import ApolloClient from 'apollo-boost';

export default new ApolloClient({
  uri: `http://${window.location.hostname}:3000/graphql`,
});
