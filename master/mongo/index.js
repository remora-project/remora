import mongoose from 'mongoose';

mongoose.Promise = Promise;

mongoose.connection.on('connected', () => {
  console.log('DB Connection Established');
});

mongoose.connection.on('reconnected', () => {
  console.log('DB Connection Reestablished');
});

mongoose.connection.on('disconnected', () => {
  console.error('DB Connection Disconnected');
});

mongoose.connection.on('close', () => {
  console.warn('DB Connection Closed');
});

mongoose.connection.on('error', error => {
  console.error(`DB Connection Error: ${error}`);
});

export default async function() {
  try {
    const DB_NAME = 'remora';
    const DB_URI = `mongodb://localhost/${DB_NAME}`;

    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      autoReconnect: true,
      reconnectTries: 900,
      reconnectInterval: 2000, // 900 * 2000 ms = 30 min
    });
  } catch(e) {
    console.error(e);
  }
}
