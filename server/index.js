const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();

app.use(cors());

app.get('/api/files', (req, res) => {
  res.json(data);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
