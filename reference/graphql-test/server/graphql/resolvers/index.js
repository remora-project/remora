import { mergeResolvers } from 'merge-graphql-schemas';

import User from './user';

export default mergeResolvers([
  User,
]);
