const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')
const ConnectDB = require('./db/db');
const foodRouter = require('./routes/food.route');
const donatorRouter = require('./routes/donator.route');
const reqRouter = require('./routes/request.route');

dotenv.config();

const port = process.env.PORT || 9000;
const mongoUri = process.env.MONGO_URI;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://nourishhub-e6cf5.web.app",
    "https://nourishhub-e6cf5.firebaseapp.com",
    "https://noruishhub-server-golam-mahabub-redoys-projects.vercel.app",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// connect mongodb
ConnectDB(mongoUri);

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};


// jwt
app.post("/jwt", async (req, res) => {
  const user = req.body;
  console.log("user for token", user);
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.cookie("token", token, cookieOptions).send({success:true});
});



app.post("/logout", (req, res) => {
  res
    .clearCookie("token", { ...cookieOptions, maxAge: 0 })
    .send({ success: true });
});


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
