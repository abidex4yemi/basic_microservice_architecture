const mongoose = require("mongoose");
const User = require("./user");
const { DB_URI } = require("../config");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const connectDB = () => {
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
};

const models = { User };

module.exports = { models, connectDB };
