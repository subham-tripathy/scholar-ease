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
  const body = req.body;
  const files = req.files;

  const getFileBuffer = (field) => {
    return files[field] ? files[field][0].buffer : null;
  };

  const query = `
      INSERT INTO scholarship_applicants (
        student_id, full_name, date_of_birth, gender, nationality,
        contact_number, email, address, photograph, digital_signature,
        class_10_board, class_10_passing_year, class_10_percentage, class_10_certificate,
        class_12_type, class_12_board, class_12_passing_year, class_12_percentage, class_12_certificate,
        father_name, father_occupation, mother_name, mother_occupation, family_income,
        scholarship_id, identity_proof, residence_certificate, income_certificate,
        caste_certificate, pan_card, bank_account_number, ifsc_code, passbook_photo
      ) VALUES (
        $1, $2, $3, $4, $5,
        $6, $7, $8, $9, $10,
        $11, $12, $13, $14,
        $15, $16, $17, $18, $19,
        $20, $21, $22, $23, $24,
        $25, $26, $27, $28,
        $29, $30, $31, $32, $33
      ) RETURNING serial_no;
    `;

  const values = [
    body.student_id,
    body.full_name,
    body.date_of_birth,
    body.gender,
    body.nationality,
    body.contact_number,
    body.email,
    body.address,
    getFileBuffer('photograph'),
    getFileBuffer('digital_signature'),
    body.class_10_board,
    body.class_10_passing_year,
    body.class_10_percentage,
    getFileBuffer('class_10_certificate'),
    body.class_12_type,
    body.class_12_board,
    body.class_12_passing_year,
    body.class_12_percentage,
    getFileBuffer('class_12_certificate'),
    body.father_name,
    body.father_occupation,
    body.mother_name,
    body.mother_occupation,
    body.family_income,
    body.scholarship_id,
    getFileBuffer('aadhar_card'), // assuming this is identity_proof
    getFileBuffer('residence_certificate'),
    getFileBuffer('income_certificate'),
    getFileBuffer('caste_certificate'),
    getFileBuffer('pan_card'),
    body.bank_account_number,
    body.ifsc_code,
    getFileBuffer('passbook_photo')
  ];

  client.query(query, values)
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
      // console.log(data)
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

const fetchAllSAGmembers = (req, res) => {
  client
    .query("select * from users where account_type = 'sag'")
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: "error" });
    });
};

const deleteSAGmember = (req, res) => {
  const { sagID } = req.body;
  console.log("sagID: " + sagID);
  client.query("delete from users where uid = $1", [sagID]).then((data) => {
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

const addSAGmember = (req, res) => {
  const { SAGid, SAGname, SAGgender, SAGemail, SAGphno, SAGpw } = req.body;
  client
    .query("select * from users where uid = $1", [SAGid])
    .then((data) => {
      if (data.rowCount == 1) {
        res.send({ msg: "duplicate name" });
      } else {
        client
          .query(
            "insert into users (uid, name, email, phno, account_type, gender, pw) values ($1, $2, $3, $4, 'sag', $5, $6)",
            [SAGid, SAGname, SAGemail, SAGphno, SAGgender, SAGpw]
          )
          .then((x) => {
            if (x.rowCount == 1) {
              res.send({ msg: "success" });
            }
          })
          .catch((err) => {
            console.log(err);
            res.send({ msg: "error" });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({ msg: "error" });
    });
};

const fetchPendingApplications = (req, res) => {
  client.query("select * from scholarship_applicants")
    .then(data => { res.send(data.rows) })
    .catch(err => { console.log(err); res.send({ status: "error" }) })
}

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
  fetchAllSAGmembers,
  deleteSAGmember,
  addSAGmember,
  fetchPendingApplications,
};
