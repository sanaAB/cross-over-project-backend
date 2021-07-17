const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const messagSchema = new Schema({
//   msg_text: { type: String, required: true },
//   userSchema_id: { type: Number, required: true },
// });

const userSchema = new Schema({
    user_name: { type: String, required: true },
});

const model = mongoose.model("user", userSchema);
module.exports = model;