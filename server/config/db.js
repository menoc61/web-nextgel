const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://meno:momenic61@nextgel-cluster.xg1xwds.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeded");
    } else {
      console.log("Error in DB conncection: " + err);
    }
  }
);

require("../models/seance.model");
