import mongoose from 'mongoose';

const DB_URI = 'mongodb://127.0.0.1/graphql-test';

export default function() {
  mongoose.connect(DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
  }).then(()=>{
    console.log('MongoDB connected');
  }).catch(err=>{
    console.error(err);
  });
}
