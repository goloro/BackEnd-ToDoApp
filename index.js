// CONSTANTS
const express = require('express');
const mongoose = require('mongoose');
const routerApi = require('./endpoints');
const cors = require('cors');
const app = express();
const port = 3000;

app.set('port', process.env.PORT || port);

mongoose.connect('mongodb+srv://goloro:goloro@todoapp.fmthlhb.mongodb.net/ToDoApp?retryWrites=true&w=majority&appName=ToDoApp')
.then(() => { console.log('✅ Connected to MongoDB') })
.catch((err) => { console.error('❌ Error connecting to MongoDB', err) })

app.use(express.json());
app.use(cors({ origin: '*' }));

routerApi(app);

app.listen(app.get('port'), () => {
  console.log(`🚀 Server listening on port ${app.get('port')}`);
  console.log(`📭 URL -> http://localhost:${app.get('port')}/`);
})

