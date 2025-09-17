const express = require('express')
const routerApi = require('./endpoints')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
// const port = process.env.port || 3000;
app.set('port', process.env.PORT || 3000)

// MongoDB - CONECCTION
//mongoose.connect('mongodb+srv://goloro:goloro@golopop.5soj7.mongodb.net/GoloPop?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/devDash')
mongoose.connect('mongodb+srv://goloro:goloro@todoapp.9badz.mongodb.net/devDash?retryWrites=true&w=majority')


app.use(express.json());

const whitelist = ["http://127.0.0.1:5500/index.html?", "http://127.0.0.1:5500/index.html"]
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback (new Error('no permitido'), false)
        }
    }
};
// app.use(cors(options));
app.use(cors({origin: "*"}))

routerApi(app);

app.listen(app.get('port'));