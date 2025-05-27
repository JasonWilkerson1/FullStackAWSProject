const express = require('express');
const cors = require('cors');
const assetsRouter = require('./routes/assets');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(express.json());

// Routes
app.use('/assets', assetsRouter);

// Health check
app.get('/health', (req, res) => res.status(200).json({ status: 'OK' }));

const PORT = process.env.PORT || 8080; // Elastic Beanstalk requires 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));