const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messagSchema = new Schema({
  msgText: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
},
});

const model = mongoose.model("message", messagSchema);
module.exports = model;