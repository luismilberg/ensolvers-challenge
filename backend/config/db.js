const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://127.0.0.1:27017/ensolvers",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true, //make this true
    autoIndex: true, //make this also true
  }
);

