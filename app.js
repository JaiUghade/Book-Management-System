const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse JSON
app.use(express.json());

// Use book routes
app.use('/books', bookRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});