const cors = require('cors');
const express = require('express');
const app = express();

// Configure CORS
app.use(cors({
  origin: 'https://21xo.com', // Allow requests from this origin
  credentials: true, // Allow cookies
}));

// Main domain route
app.get('/', (req, res) => {
    res.send('Hello from main domain!');
  });
  
  // Subdomain route
  const subdomain = express.Router();
  
  subdomain.get('/', (req, res) => {
    res.send('Hello from subdomain!');
  });
  
  app.use(express.vhost('app.21xo.com', subdomain));
  
  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
