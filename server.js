const express = require("express");
const mongoose = require("mongoose");
const items = require("./routes/api/items");

const app = express();
app.use(express.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB is connected!!!"))
  .catch(err => console.log(err));

//(use paths)
app.use("/api/items", items);

const port = 5002;

app.listen(port, () => console.log(`server is running on ${port}`));
