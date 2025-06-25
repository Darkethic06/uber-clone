const express = require('express'); 
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');


connectToDb();
app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.use('/users', userRoutes);


module.exports = app;