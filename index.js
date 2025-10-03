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

// CORS Configuration - Two options available
// Option 1: Open CORS (for development - less secure)
const openCorsOptions = {
  origin: '*',
  credentials: false
};

// Option 2: Secure CORS (for production - more secure)
const secureCorsOptions = {
  origin: process.env.FRONTEND_URL || 'https://goloro.github.io/FrontEnd-ToDoApp',
  credentials: true,
  optionsSuccessStatus: 200
};

// Choose which CORS to use (change this line to switch)
app.use(cors(openCorsOptions));        // 🔓 CURRENTLY USING: Open CORS
// app.use(cors(secureCorsOptions));   // 🔒 COMMENT/UNCOMMENT to use Secure CORS

routerApi(app);

app.listen(app.get('port'), () => {
  console.log(`🚀 Server listening on port ${app.get('port')}`);
  console.log(`📭 URL -> http://localhost:${app.get('port')}/`);
})

