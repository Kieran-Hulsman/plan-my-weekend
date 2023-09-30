const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define an API endpoint
app.get('/api/data', (req, res) => {
  // Process the request and send a JSON response
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
