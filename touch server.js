const express = require('express');
const app = express();
const PORT = 3000;

// "Hello World" route at root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

cd c:\Users\Administrator\Desktop\week-2-express-js-assignment-lamev