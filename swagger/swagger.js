const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book API',
            version: '1.0.0',
            description: 'A simple Express Book API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            schemas: {
                Book: {
                    type: 'object',
                    required: ['title', 'author', 'publishedYear'],
                    properties: {
                        id: {
                            type: 'string',
                            description: 'The auto-generated id of the book',
                        },
                        title: {
                            type: 'string',
                            description: 'The title of the book',
                        },
                        author: {
                            type: 'string',
                            description: 'The author of the book',
                        },
                        publishedYear: {
                            type: 'integer',
                            description: 'The year the book was published',
                        },
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js'], // Path to the API docs
};

module.exports = swaggerJsdoc(swaggerOptions);
