const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

let connect = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connected to mongodb successfully");
  } catch (err) {
    console.log(err.message);
  }
};

connect();
