// 1. Import the Express library
const express = require('express');

// 2. Create an instance of an Express app
const app = express();

// 3. Define a simple route (a path that responds to a request)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 4. Make the app listen on a port (like tuning the remote to the car)
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});
