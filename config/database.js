const mongoose = require('mongoose');
const mongoDB = 'mongodb://joaonunes091:Q9Ait1bDAkjElYjQRXUnkZ6xETVYqIEJhlLmSy2Pt7uQqAxbbMYWFa0KDsei33ll4woLmAaO2VmfvysNznxKYQ==@joaonunes091.documents.azure.com:10255/?ssl=true&replicaSet=globaldb';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;
