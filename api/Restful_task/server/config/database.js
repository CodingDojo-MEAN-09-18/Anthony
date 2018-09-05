const mongoose  = require('mongoose');
const fs = require('fs');
const path = require('path');
const modelsPath = path.resolve('server', 'models');
const reg = new RegExp("\\.js$", "i");
const restful_task = 'mongodb://localhost/restful_task-api';

mongoose.connect(restful_task);
mongoose.Promise  = global.Promise;
mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${ restful_task }`);
});

mongoose.connection.on('error', err => {
  console.error(`Mongoose default connection error: ${ err }`);
  process.exit(0);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through program termination');
    process.exit(0);
  });
});

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
