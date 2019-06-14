import mongoose from 'mongoose';

const Transaction = new mongoose.Schema({
  timestamp: {
    type: Number,
    required: true,
  },
  elapsedTime: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Transaction', Transaction);
