const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Set the cookie
  res.cookie('name', 'value', { domain: '.21xo.com', path: '/', secure: true, httpOnly: true });

  // Send the response
  res.send('Cookie set successfully');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
