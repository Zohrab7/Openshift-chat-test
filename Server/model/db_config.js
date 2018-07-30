
const dbname = "mydb";
const url = `mongodb://localhost:27017/${dbname}`;
module.exports.db_connect = mongoose => {
    mongoose.connection.on('connected', function () {
        console.log("connected");
    }).on('error', function (e) {
        console.log(` Mongodb isn't Connected ---> "+err)${e}`);
    }).on('disconnected', function () {
        console.log("disconnected");
    });
    mongoose.connect(url,{useNewUrlParser: true }, err => {
        if (err) throw err;
        console.log(`Database >${dbname}< has been created!`);
    });
};