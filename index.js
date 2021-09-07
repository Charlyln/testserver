const express = require('express');

const app = express();
const PORT = 80;

app.get('*', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, async () => {
  console.log(`App running on port ${PORT}`);
});
