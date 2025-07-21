// swaggerDef.js

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'My Node.js API Documentation',
      version: '1.0.0',
      description: 'API documentation for your Node.js application.',
      contact: {
        name: 'Your Name/Company',
        url: 'http://yourwebsite.com',
        email: 'your.email@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000', // Adjust this to your application's base URL
        description: 'Development server',
      },
      // You can add more server URLs for production, staging, etc.
      // {
      //   url: 'https://api.yourdomain.com',
      //   description: 'Production server',
      // },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter JWT Bearer token **_only_**',
        },
      },
    },
    security: [
      {
        bearerAuth: [], // Apply bearerAuth globally, or apply to specific endpoints later
      },
    ],
  },
  // Path to the API docs:
  // This tells swagger-jsdoc where to find your JSDoc comments.
  // Make sure this path is correct based on your project structure.
  apis: ['./routes/*.js', './models/*.js', './controllers/*.js'], // Adjust paths as needed
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;