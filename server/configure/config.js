exports = function ConnectDB() {
    console.log("in");
       var mongoDB = 'mongodb://localhost:27017/userDb';
    mongoose.connect(mongoDB);
        mongoose.connection.on('open', function () {
        console.log(console, 'Successful:')
    });
    mongoose.connection.on('error', function () {
        console.error.bind(console, 'MongoDB connection error:')
    });
}
config.js
