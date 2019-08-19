import { mergeResolvers } from 'merge-graphql-schemas';

import Transaction from './transaction';

export default mergeResolvers([
  Transaction,
]);
