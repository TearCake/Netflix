const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    imgTitle: { type: String, required: true },
    imgSm: { type: String, required: true },
    trailer: { type: String, required: true },
    video: { type: String, required: true },
    year: { type: String, required: true },
    limit: { type: Number, required: true },
    genre: { type: String, required: true },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);


