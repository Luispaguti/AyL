const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/pruebas');
 
// When successfully connected
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
 
// If the connection throws an error
mongoose.connection.on('error', err => console.log(`Mongoose default connection error: ${err}`));
 
// When the connection is disconnected
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
 
// If the Node process ends, close the Mongoose connection //Para cuando hagamos cntrl + C se desconecte
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});