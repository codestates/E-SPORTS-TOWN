const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const masterRouter = require('./routes/masterRouter');
const normalRouter = require('./routes/normalRouter');
const auctionRouter = require('./routes/auctionRouter');
const createNftRouter = require('./routes/createNftRouter');
const accountRouter = require('./routes/accountRouter');
require('dotenv').config();
const PORT = process.env.PORT || 1234;
// const db = require('./models');

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_ID}:${process.env.MONGO_PASSWORD}@cluster0.jo2b1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB connected...'))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// Routes
app.use('/master', masterRouter);
app.use('/normal', normalRouter);
app.use('/auction', auctionRouter);
app.use('/create', createNftRouter);
app.use('/account', accountRouter);

app.get('/', (req, res) => {
  res.json({ message: `Server is running on port ${PORT}` });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT} `));