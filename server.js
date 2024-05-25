const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { addUser } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('public'));

// POST endpoint to handle form submission
app.post('/submit', async (req, res) => {
  const { username } = req.body;
  if (username) {
    try {
      const user = await addUser(username);
      res.json({ message: `Username ${user.username} received successfully!`, user });
    } catch (error) {
      res.status(500).json({ error: 'Error inserting username into database' });
    }
  } else {
    res.status(400).json({ error: 'Username is required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
