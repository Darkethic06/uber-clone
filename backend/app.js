const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Import Swagger packages and configuration
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerDef');

dotenv.config();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');


connectToDb();
app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Root route - you can document this too if needed
app.get('/', (req,res)=>{
    /**
     * @swagger
     * /:
     * get:
     * summary: Home endpoint
     * description: Returns a simple "Hello World" message.
     * 
     * responses:
     * 200:
     * description: A successful response.
     * content:
     * text/plain:
     * schema:
     * type: string
     * example: Hello World
     */
    res.send('Hello World');
});

// Your API routes
app.use('/users', userRoutes);

// Serve Swagger UI documentation
// Access the documentation at http://localhost:PORT/api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));


module.exports = app;