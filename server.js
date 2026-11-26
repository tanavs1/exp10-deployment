const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    deployment: 'Cloud Container Environment'
  });
});

app.listen(PORT, () => {
  console.log(`Cloud Deployment server running on port ${PORT}`);
});
