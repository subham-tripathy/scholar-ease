const express = require("express");
const cors = require("cors");
const { loginLogic, signUpLogic } = require("./backendFunctions");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, This is RajaBhai");
});

app.post("/login", (req, res) => {
  loginLogic(req, res);
});

app.post("/signup", (req, res) => {
  signUpLogic(req, res);
});

app.listen(9898, () => {
  console.log("backend server started at port:9898");
});
