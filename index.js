// Load environment variables
require('dotenv').config();

// CONSTANTS
const express = require('express');
const mongoose = require('mongoose');
const routerApi = require('./endpoints');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3000);

// Secure MongoDB connection using environment variables
mongoose.connect(process.env.MONGODB_URI)
.then(() => { console.log('✅ Connected to MongoDB') })
.catch((err) => { console.error('❌ Error connecting to MongoDB', err) })

app.use(express.json());

// Secure CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3001',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

routerApi(app);

app.listen(app.get('port'), () => {
  console.log(`🚀 Server listening on port ${app.get('port')}`);
  console.log(`📭 URL -> http://localhost:${app.get('port')}/`);
})

