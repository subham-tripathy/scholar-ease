export const BACKEND_BASE_URL = "http://localhost:9898";
import { toast } from "react-toastify";

const validEmailExtensions = [
  "gmail",
  "outlook",
  "yahoo",
  "hotmail",
  "aol",
  "icloud",
  "protonmail",
  "zoho",
  "yandex",
  "mail",
  "gmx",
  "live",
  "msn",
  "fastmail",
  "hushmail",
  "tutanota",
  "disroot",
  "riseup",
];

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  const domain = email.split("@")[1];
  const extension = domain.split(".")[0];

  return validEmailExtensions.includes(extension);
}

export function validateIndianPhoneNumber(phone) {
  const sanitized = phone.replace(/[^\d+]/g, "");
  const phnoRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
  return phnoRegex.test(sanitized);
}

export function changeNav(e) {
  const ul = e.target.parentElement.parentElement;
  ul.querySelectorAll("li a").forEach((elem) => {
    if (elem.classList.contains("bg-[#4285F4]")) {
      elem.classList.remove("bg-[#4285F4]");
      elem.classList.add("hover:bg-[#4285F4]");
      elem.classList.remove("text-white");
      elem.classList.add("hover:text-white");
    }
  });
  e.target.classList.remove("hover:bg-[#4285F4]");
  e.target.classList.add("bg-[#4285F4]");
  e.target.classList.remove("hover:text-white");
  e.target.classList.add("text-white");
}

export const successToast = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};

export const errorToast = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};

export const revealScholarshipDetailCard = (id, arr) => {
  const card = document.querySelector("#scholarshipDetailCard");
  const item = arr.find((item) => item.scheme_id == id);
  card.querySelector("#cardName").textContent = item.scheme_name;
  card.querySelector("#cardAmt").textContent = "Amount: ₹" + item.scheme_amt;
  card.querySelector("#cardDesc").textContent = item.scheme_desc;
  card.querySelector("#eligibility").textContent = item.eligibility_criteria;
  let date = new Date(item.deadline);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const shortDate = `${day}/${month}/${year}`;
  card.querySelector("#cardDeadLine").textContent =
    "Application Deadline: " + shortDate;
  card.parentElement.style.scale = "1";
};

export const closeScholarshipDetailCard = () => {
  document.querySelector("#scholarshipDetailCard").parentElement.style.scale =
    "0";
};

export const openEditAccountComponent = () => {
  document.querySelector("#EditAccountComponent").style.scale = "1";
  setTimeout(() => {
    document.querySelector("#EditAccountComponent").style.backdropFilter =
      "blur(10px)";
  }, 200);
};

export const closeEditAccountComponent = () => {
  document.querySelector("#EditAccountComponent").style.scale = "0";
  document.querySelector("#EditAccountComponent").style.backdropFilter =
    "blur(0px)";
};

export const openAddSchemePanel = () => {
  document.querySelector("#addSchemePanel").parentElement.style.scale = "1";
  setTimeout(() => {
    document.querySelector(
      "#addSchemePanel"
    ).parentElement.style.backdropFilter = "blur(10px)";
  }, 200);
};

export const closeAddSchemePanel = () => {
  document.querySelector("#addSchemePanel").parentElement.style.scale = "0";
  document.querySelector("#addSchemePanel").parentElement.style.backdropFilter =
    "blur(0px)";
};

export const openAddSAGPanel = () => {
  document.querySelector("#addSAGPanel").parentElement.style.scale = "1";
  setTimeout(() => {
    document.querySelector("#addSAGPanel").parentElement.style.backdropFilter =
      "blur(10px)";
  }, 200);
};

export const closeAddSAGPanel = () => {
  document.querySelector("#addSAGPanel").parentElement.style.scale = "0";
  document.querySelector("#addSAGPanel").parentElement.style.backdropFilter =
    "blur(0px)";
};

export const revealSAGDetailCard = (
  account_type,
  email,
  gender,
  name,
  phno,
  profile_pic,
  uid
) => {
  const SAGcard = document.querySelector("#SAGDetailCard");
  SAGcard.querySelector("#SAGname").textContent = "Name: " + name;
  SAGcard.querySelector("#SAGemail").textContent = "Email: " + email;
  SAGcard.querySelector("#SAGgender").textContent = "Gender: " + gender;
  SAGcard.querySelector("#SAGphno").textContent = "Phone Number: " + phno;
  // SAGcard.querySelector("#SAGaccount_type").textContent = "Account Type: " + account_type;
  // SAGcard.querySelector("#SAGprofile_pic").textContent = profile_pic;
  SAGcard.querySelector("#SAGuid").textContent = "SAG ID: " + uid;
  SAGcard.parentElement.style.scale = "1";
};

export const closeSAGDetailCard = () => {
  document.querySelector("#SAGDetailCard").parentElement.style.scale = "0";
};

export const openPendingApplicationCard = (data) => {

  const card = document.querySelector("#PendingApplicationDetailCard")

  card.querySelector("#scholarship_id").textContent = "Scholarship ID: " + data.scholarship_id
  card.querySelector("#student_id").textContent = "Student ID: " + data.student_id
  card.querySelector("#full_name").textContent = "Student Name: " + data.full_name
  card.querySelector("#gender").textContent = "Gender: " + data.gender
  card.querySelector("#contact_number").textContent = "Phone: " + data.contact_number
  card.querySelector("#email").textContent = "Email: " + data.email
  card.querySelector("#address").textContent = "Location: " + data.address
  card.querySelector("#date_of_birth").textContent = "DOB: " + `${String(new Date(data.date_of_birth).getDate()).padStart(2, '0')}-${String(new Date(data.date_of_birth).getMonth() + 1).padStart(2, '0')}-${new Date(data.date_of_birth).getUTCFullYear()}`;
  card.querySelector("#nationality").textContent = "Nationality: " + data.nationality


  card.querySelector("#application_date").textContent = "Applied on: " + `${String(new Date(data.application_date).getDate()).padStart(2, '0')}-${String(new Date(data.application_date).getMonth() + 1).padStart(2, '0')}-${new Date(data.application_date).getUTCFullYear()}`;


  card.querySelector("#class_10_board").textContent = "Class 10th Board Type: " + data.class_10_board
  card.querySelector("#class_10_passing_year").textContent = "Class 10th passing year: " + data.class_10_passing_year
  card.querySelector("#class_10_percentage").textContent = "Class 10th percentage: " + data.class_10_percentage + "%"

  const _12th = "Class 12th"
  if (data.class_12_type != '12th') _12th = "Diploma"
  card.querySelector("#class_12_board").textContent = _12th + " Type: " + data.class_12_board
  card.querySelector("#class_12_passing_year").textContent = _12th + " passing year: " + data.class_12_passing_year
  card.querySelector("#class_12_percentage").textContent = _12th + " percentage: " + data.class_12_percentage + "%"

  card.querySelector("#father_name").textContent = "Father's Name: " + data.father_name
  card.querySelector("#father_occupation").textContent = "Father's Occupation: " + data.father_occupation
  card.querySelector("#mother_name").textContent = "Mother's Name: " + data.mother_name
  card.querySelector("#mother_occupation").textContent = "Mother's Occupation: " + data.mother_occupation
  card.querySelector("#family_income").textContent = "Family Income: ₹" + data.family_income












  const buffer = new Uint8Array(data.photograph.data);
  const base64String = btoa(buffer.reduce((data, byte) => data + String.fromCharCode(byte), ''));
  const dataUrl = `data:image/png;base64,${base64String}`;
  card.querySelector('#photograph').src = dataUrl;



  card.querySelector("#bank_account_number").textContent = "Bank Account No: " + data.bank_account_number
  card.querySelector("#ifsc_code").textContent = "Bank IFSC Code: " + data.ifsc_code





  const docArray = [
    ["digital_signature", data.digital_signature.data],
    // ["caste_certificate", data.caste_certificate.data],
    ["class_10_certificate", data.class_10_certificate.data],
    ["class_12_certificate", data.class_12_certificate.data],
    ["identity_proof", data.identity_proof.data],
    ["income_certificate", data.income_certificate.data],
    ["pan_card", data.pan_card.data],
    // ["passbook_photo", data.passbook_photo.data],
    ["photograph", data.photograph.data],
    ["residence_certificate", data.residence_certificate.data],
  ]
  for (let i = 0; i < docArray.length; i++) {
    const btn = document.createElement("button")
    btn.classList.add('cursor-pointer', 'bg-slate-500', 'py-1', 'px-3', 'rounded', 'border', 'border-white', 'text-white', 'font-normal')
    btn.textContent = "View Certificate"
    btn.onclick = () => {
      const buffer = new Uint8Array(docArray[i][1]);
      const base64String = btoa(buffer.reduce((data, byte) => data + String.fromCharCode(byte), ''));
      const dataUrl = `data:image/png;base64,${base64String}`;

      document.querySelector("#PendingApplicationDetailDocumentCard").classList.remove('scale-0')
      document.querySelector("#PendingApplicationDetailDocumentCard").classList.add('scale-100')
      document.querySelector("#PendingApplicationDetailDocumentCard").querySelector("img").src = dataUrl
    }

    card.querySelector(`#${docArray[i][0]}`).textContent = docArray[i][0].replaceAll('_', ' ')
    card.querySelector(`#${docArray[i][0]}`).appendChild(btn)
  }


  // card.querySelector("#").textContent = "digital signature: "
  // card.querySelector("#").appendChild(btn1)
  // card.querySelector("#").textContent = "caste: " + data.caste_certificate
  // card.querySelector("#").appendChild(btn2)
  // card.querySelector("#").innerHTML = "Class 10th Certificate: "
  // card.querySelector("#").appendChild(btn3)
  // card.querySelector("#").textContent = _12th + " Certificate: "
  // card.querySelector("#").appendChild(btn4)
  // card.querySelector("#").textContent = "Identity Proof: "
  // card.querySelector("#").appendChild(btn5)
  // card.querySelector("#").textContent = "Income Certificate"
  // card.querySelector("#").appendChild(btn6)
  // card.querySelector("#").textContent = "Pan Card: "
  // card.querySelector("#").appendChild(btn7)
  // card.querySelector("#").textContent = "Passbook Photo"
  // card.querySelector("#").appendChild(btn8)
  // card.querySelector("#").textContent = "Photograph: "
  // card.querySelector("#").appendChild(btn9)
  // card.querySelector("#").textContent = "Residence Certificate: "
  // card.querySelector("#").appendChild(btn10)





















  card.parentElement.style.scale = 1
}

export const closePendingApplicationCard = () => {
  const card = document.querySelector("#PendingApplicationDetailCard")
  card.parentElement.style.scale = 0
}