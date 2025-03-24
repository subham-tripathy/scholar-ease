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

const loginLogic = (req, res) => {
  const { uid, pw } = req.body;
  client
    .query("SELECT * FROM users WHERE uid = $1", [uid])
    .then((data) => {
      if (data.rows.length === 0) {
        res.send({ status: "no user" });
      } else {
        if (data.rows[0].pw == pw) {
          if (data.rows[0].type === "admin") {
            res.send({ status: "success-admin" });
          } else {
            res.send({ status: "success" });
          }
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
  const { name, uid, email, phno, gender, pw } = reqBody;
  client
    .query(
      "INSERT INTO users (name, uid, email, phno, gender, pw) VALUES ($1, $2, $3, $4, $5, $6)",
      [name, uid, email, phno, gender, pw]
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

const fetchAllSchemes = (req, res) => {
  client
    .query("select * from all_scholarships")
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const applyFunction = (req, res) => {
  console.log(req.body);
  console.log(req.files);
  const {
    student_id,
    full_name,
    date_of_birth,
    gender,
    nationality,
    contact_number,
    email,
    address,
    class_10_board,
    class_10_passing_year,
    class_10_percentage,
    class_12_type,
    class_12_board,
    class_12_passing_year,
    class_12_percentage,
    father_name,
    father_occupation,
    mother_name,
    mother_occupation,
    family_income,
    scholarship_id,
  } = req.body;
  client
    .query(
      "INSERT into scholarship_applicants (student_id, full_name, date_of_birth, gender, nationality, contact_number, email, address, class_10_board, class_10_passing_year, class_10_percentage, class_12_type, class_12_board, class_12_passing_year, class_12_percentage, father_name, father_occupation, mother_name, mother_occupation, family_income, scholarship_id ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)",
      [
        student_id,
        full_name,
        date_of_birth,
        gender,
        nationality,
        contact_number,
        email,
        address,
        class_10_board,
        class_10_passing_year,
        class_10_percentage,
        class_12_type,
        class_12_board,
        class_12_passing_year,
        class_12_percentage,
        father_name,
        father_occupation,
        mother_name,
        mother_occupation,
        family_income,
        scholarship_id,
      ]
    )
    .then((data) => {
      if (data.rowCount == 1) {
        res.send({ msg: "success" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ msg: "error" });
    });
};

const fetchScholarShipDetail = (req, res) => {
  const { uid } = req.body;
  client
    .query("select * from all_scholarships where scheme_id = $1", [uid])
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteScheme = (req, res) => {
  const { scheme_id } = req.body;
  client
    .query("delete from all_scholarships  where scheme_id = $1", [scheme_id])
    .then((data) => {
      if (data.rowCount == 1) {
        res.json({
          status: true,
          message: "Deleted Successfully",
        });
      } else {
        res.json({
          status: false,
          message: "An Error Occurred !",
        });
      }
    });
};

const editFunction = (req, res) => {
  // console.log(req.body);
  // console.log(req.files);
  const { uid, name, new_uid, email, gender, phno, profile_pic } = req.body;
  client
    .query(
      "UPDATE users SET name = $1, email = $2, gender = $3, phno = $4, uid = $5 WHERE uid = $6;",
      [name, email, gender, phno, new_uid, uid]
    )
    .then(() => {
      res.send({ status: "success" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: "error" });
    });
};

const addNewScheme = (req, res) => {
  const {
    schemeName,
    schemeAmount,
    schemeDesc,
    eligibilityCriteria,
    deadline,
  } = req.body;
  client
    .query(
      "INSERT into all_scholarships ( scheme_name, scheme_amt, scheme_desc, eligibility_criteria, deadline) values ($1, $2, $3, $4, $5)",
      [schemeName, schemeAmount, schemeDesc, eligibilityCriteria, deadline]
    )
    .then((data) => {
      console.log(data);
      if (data.rowCount == 1) {
        res.send({ msg: "success" });
      }
    })
    .catch((err) => {
      console.log(err);
      if (err.code == "23505") {
        res.send({ msg: "duplicate name" });
      } else {
        res.send({ msg: "error" });
      }
    });
};

const fetchHistory = (req, res) => {
  const { uid } = req.body;
  client
    .query("SELECT * from scholarship_applicants where student_id = $1", [uid])
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.send({ err: "error" });
    });
};

module.exports = {
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
};
