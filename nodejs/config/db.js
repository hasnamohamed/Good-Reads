const mongoose = require('mongoose');
const config = process.env

async function mongooseConnection() {
        try {
                await mongoose.connect(`mongodb://${config.MONGO_URL}:27017/good_reader_db`)
                console.log(`mongoose connected successfully and listening on the port 27017`)
        } catch {
                console.log("mongoose can not connect properly")
        }
}
mongooseConnection()