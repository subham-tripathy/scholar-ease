// Database Connection Part

const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "scholar_ease",
  password: "subham1010",
  port: 5432,
});
client
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err));

// Login Logic Part
const loginLogic = (req, res) => {
  const { uid, pw } = req.body;
  client
    .query("SELECT * FROM users WHERE uid = $1", [uid])
    .then((data) => {
      if (data.rows.length === 0) {
        res.send({ status: "no user" });
      } else {
        if (data.rows[0].pw == pw) {
          res.send({ status: "success" });
        } else {
          res.send({ status: "pw error" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: "error" });
    });
};

// Sign Up Logic Part
const signUpLogic = (req, res) => {
  const { uid } = req.body;
  client.query("SELECT * FROM users WHERE uid = $1", [uid]).then((data) => {
    if (data.rows.length !== 0) {
      res.send({ status: "user exists" });
    } else {
      insertUser(req.body, res);
    }
  });
};

const insertUser = (reqBody, res) => {
  const { name, uid, email, phno, pw } = reqBody;
  client
    .query(
      "INSERT INTO users (name, uid, email, phno, pw) VALUES ($1, $2, $3, $4, $5)",
      [name, uid, email, phno, pw]
    )
    .then(() => {
      res.send({ status: "success" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: "error" });
    });
};

const getAccountInfo = (req, res) => {
  const { uid } = req.body;
  client
    .query("select * from users where uid = $1", [uid])
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { loginLogic, signUpLogic, getAccountInfo };
