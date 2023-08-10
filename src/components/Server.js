const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Simulated user data for demonstration purposes
const users = [
  { email: 'user@example.com', password: 'password123' },
];

// Route to handle login
app.post('/Login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
