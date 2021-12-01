const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const cronGlobalDataController = require("./controllers/cronGlobalDataController");
const cronVNDataController = require("./controllers/cronVNDataController");
var cron = require("node-cron");
var cors = require("cors");
var morgan = require("morgan");
// Express
const app = express();
app.use(express.json());
app.use(morgan("tiny"));

// Define port
const port = process.env.PORT || 5000;

mongoose.connect(
  "mongodb://localhost:27017/luanvan",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Connect Fail to MongoDB!");
      console.log(err);
    } else {
      console.log("Connected to MongoDB!");
    }
  }
);

// Cron data
cron.schedule("55 18 * * *", () => {
  cronGlobalDataController.getData();
});

cron.schedule("00 19 * * *", () => {
  cronVNDataController.getData();
});

app.use(cors());

// Router
app.use("/global", require("./routers/globalDataRouter"));
app.use("/vietnam", require("./routers/vietnamDataRouter"));

// Listening to the server
app.listen(port, () => console.log("Server running at ", port));
