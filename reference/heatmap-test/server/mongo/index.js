import mongoose from 'mongoose';

import { importDummy } from '../controllers/txnController';

const DB_NAME = 'remora';
const DB_URI = `mongodb://127.0.0.1/${DB_NAME}`;

export default async function() {
  try {
    await mongoose.connect(DB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB:${DB_NAME} connected`);

    importDummy();
  } catch(e) {
    console.error(e);
  }
}
