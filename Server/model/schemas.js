const {Schema} =require("mongoose");
module.exports.ChatSchema = new Schema({
    body: {type:String},
    user:{type:String}
});
