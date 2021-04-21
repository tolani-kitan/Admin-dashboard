const express = require('express');

const app = express();
const cors = require('cors');
const config = require('./config');
const { db } = require('./config/db');
const userRoutes = require('./src/routes/user');
const expenseRoute = require('./src/routes/expense');
const similarityRoute = require('./src/routes/similarity');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.options('*', cors());

app.use('/users', userRoutes);
app.use('/expense', expenseRoute);
app.use('/similar', similarityRoute);

db.connect()
  .then((obj) => {
    obj.done();
    app.listen(config.port, () => {
      console.log(`Server Started on Port ${config.port}`);
    });
  })
  .catch((error) => {
    console.log('=========>', error);
  });
