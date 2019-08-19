import { mergeTypes } from 'merge-graphql-schemas';

import Transaction from './transaction';

export default mergeTypes([Transaction], { all: true });
