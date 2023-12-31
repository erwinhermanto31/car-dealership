const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Car Dealership API',
      version: '1.0.0',
      description: 'API documentation for the Car Dealership application',
    },
  },
  apis: ['./src/routes/*.js'], // Adjust the path based on your project structure
};

const specs = swaggerJsdoc(options);
console.log(specs); 
module.exports = specs;