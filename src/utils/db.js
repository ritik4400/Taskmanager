const mongoose = require('mongoose');

exports.connectionDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        mongoose.connection.on('error', (error) => {
            console.error("Database connection error:", error);
        });

        mongoose.connection.once('connected', () => {
            console.log('Database Connected');
        });

        console.log('Database connection established successfully');
    } catch (error) {
        console.error("Error in DB connection:", error);
    }
};
