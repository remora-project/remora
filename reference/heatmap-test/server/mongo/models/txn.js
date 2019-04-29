import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TxnSchema = new Schema({
  timestamp: {
    type: Number,
    required: true,
  },
  elapsedTime: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Txn', TxnSchema);
