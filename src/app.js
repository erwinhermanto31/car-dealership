const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/cars', carRoutes);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
