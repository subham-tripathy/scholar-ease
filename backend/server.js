const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const {
  loginLogic,
  signUpLogic,
  getAccountInfo,
  fetchAllSchemes,
  applyFunction,
  fetchScholarShipDetail,
  deleteScheme,
  editFunction,
  addNewScheme,
  fetchHistory,
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

var storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage });

app.post(
  "/apply",
  upload.fields([
    { name: "photograph", maxCount: 1 },
    { name: "digital_signature", maxCount: 1 },
    { name: "class_10_certificate", maxCount: 1 },
    { name: "class_12_certificate", maxCount: 1 },
    { name: "aadhar_card", maxCount: 1 },
    { name: "residence_certificate", maxCount: 1 },
    { name: "income_certificate", maxCount: 1 },
    { name: "pan_card", maxCount: 1 },
  ]),
  applyFunction
);

app.post("/fetchScholarShipDetail", (req, res) => {
  fetchScholarShipDetail(req, res);
});

app.post("/deleteScheme", (req, res) => {
  deleteScheme(req, res);
});

storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

upload = multer({ storage });
app.post("/editAccountDetails", upload.single("profile_pic"), (req, res) => {
  editFunction(req, res);
});

app.post("/addScheme", (req, res) => {
  addNewScheme(req, res);
});

app.post("/fetchHistory", (req, res) => {
  fetchHistory(req, res);
});

app.listen(9898, "0.0.0.0", () => {
  console.log("backend server started at port:9898");
});
