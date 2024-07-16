const mongoose = require('mongoose');

exports.connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log(`Database connected successfully.`);
        })
        .catch((error) => {
            console.log(`Database failed to connect.`);
            console.error(`Error: ${error}`);
            process.exit(1);
        });
};
