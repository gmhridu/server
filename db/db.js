const mongoose = require('mongoose');


// connect to DB

const ConnectDB = (url) => {
 mongoose.connect(url)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));
}

module.exports = ConnectDB;