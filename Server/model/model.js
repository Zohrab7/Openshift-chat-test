const mongoose = require('mongoose');
let {db_connect} = require("./db_config");
const {ChatSchema} = require("./schemas");
try {
    db_connect(mongoose);
} catch (e) {
    console.log("Mongodb connection error : ", e);
}

module.exports = {
    ChatDb: mongoose.model("ChatSchema", ChatSchema)
};
