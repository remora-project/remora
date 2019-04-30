import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  timestamp: {
    type: Number,
    required: true,
  },
  elapsedTime: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Transaction', TransactionSchema);
