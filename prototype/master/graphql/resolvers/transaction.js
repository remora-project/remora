import Transaction from '../../mongo/models/transaction';

export default {
  Query: {
    async transactions() {
      try {
        return await Transaction.find().sort({ timestamp: 1 });
      } catch(e) {
        console.error(e);
      }
    },
  },
};
