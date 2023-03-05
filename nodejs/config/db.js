const mongoos = require('mongoos');
mongoose.connect('mongodb://127.0.0.1:27017/gooreadsdb', (err) => {
    if (!err) return console.log("mongo is connected successfully")
    else return console.log("There is something wrong")
});