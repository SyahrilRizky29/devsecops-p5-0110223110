const express = require('express');
const config = require('./config');
const { loginUser } = require('./authController');
const { formatResponse } = require('./utils');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(formatResponse("success", { app: config.appName, version: config.apiVersion }, "API DevSecOps Berjalan"));
});

app.post('/api/login', loginUser);

if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
}

module.exports = app;