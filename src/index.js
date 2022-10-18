const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port





mongoose
  .set("useFindAndModify", false)
  .set("useCreateIndex", true)
  .set("useNewUrlParser", true)
  .set("useUnifiedTopology", true)
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Connected to MongoDB");
    server = app.listen(config.port, () => {
      console.log(`Listening to port ${config.port}`);
    });
  })
  .catch((e) => console.log("not connected"));
