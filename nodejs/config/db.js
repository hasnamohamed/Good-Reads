const mongoose = require('mongoose');
async function mongooseConnection() {
        try {
                await mongoose.connect('mongodb://127.0.0.1:27017/good_reader_db')
                console.log("mongoose connected successfully")
        } catch {
                console.log("mongoose can not connect properly")
        }
}
mongooseConnection()