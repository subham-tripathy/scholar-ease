const express = require("express");
const cors = require("cors");
const {
  loginLogic,
  signUpLogic,
  getAccountInfo,
  fetchAllSchemes,
} = require("./backendFunctions");

const app = express();

app.use(cors({ origin: "*" }));
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

app.post("/getAccountInfo", (req, res) => {
  getAccountInfo(req, res);
});

app.post("/fetchAllSchemes", (req, res) => {
  fetchAllSchemes(req, res);
});

app.listen(9898, "0.0.0.0", () => {
  console.log("backend server started at port:9898");
});
