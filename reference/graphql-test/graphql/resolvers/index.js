import { mergeResolvers } from 'merge-graphql-schemas';

import User from './user.js';

export default mergeResolvers([
  User,
]);
