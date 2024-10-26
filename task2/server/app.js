const express = require("express");
const app = express();
const mysql = require("mysql2");
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router");
const port = 8001;

app.get("/", (req, res) => {
  res.send("Server started");
});

// app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("server starts at port no :" + port);
});
