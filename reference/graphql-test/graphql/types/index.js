import { mergeTypes } from 'merge-graphql-schemas';

import User from './user.js';

export default mergeTypes([
  User,
], { all: true });
