const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const ConnectDB = require('./db/db');
const foodRouter = require('./routes/food.route');
const donatorRouter = require('./routes/donator.route');
const reqRouter = require('./routes/request.route');

dotenv.config();

const port = process.env.PORT || 9000;
const mongoUri = process.env.MONGO_URI;

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  optionSuccessStatus: 200
}

const app = express();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// connect mongodb
ConnectDB(mongoUri);

// routes
app.get('/', (req, res) => {
  res.json({
    message: 'Server is running'
  });
});

app.use('/foods', foodRouter);
app.use('/donators', donatorRouter);
app.use('/requests', reqRouter);

// error handling
app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message || 'Internal server error'
  });
});

// Page not found handler
app.use((req, res) => {
  res.status(404).json({
    message: 'Page not found'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
