import { mergeTypes } from 'merge-graphql-schemas';

import User from './user';

export default mergeTypes([
  User,
], { all: true });
