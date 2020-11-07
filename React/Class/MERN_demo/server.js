//Foundation
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/mern_demo";

//Moongoose Connection
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected"))
  .catch();

//Moongoose BluePrints
let mernSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "First Name is required!"],
  },
});

//Mongoose Model
let MernModel = mongoose.model("Mern", mernSchema);

const port = process.env.PORT || 5000;


//Root Routes
//TEST Root Handler GET
//Write Queries
app.get("/test", (req, res) => {
  res.json({ message: "Hello from server.js!!" });
});

//NEW Root Handler POST
app.post("/new", (req, res) => {
  MernModel.create(
    {
      ...req.body, // no matter what we decide to be in the body, it will ALL be passed
    },
    function (err, result) {
      let message = err ? err : result;
      res.json(message);
    }
  );
});

//Listener
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
