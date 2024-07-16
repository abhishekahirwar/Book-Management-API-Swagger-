const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Database connection
require("./config/database").connectDB();

// Routes
const bookRoutes = require('./routes/book.routes');

app.use('/api/v1/books', bookRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
    console.log(`Swagger UI available on http://localhost:${PORT}/api-docs`);
});
