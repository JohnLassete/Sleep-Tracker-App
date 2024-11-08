// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const sleepRoutes = require('./routes/sleep');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.use('/sleep', sleepRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
