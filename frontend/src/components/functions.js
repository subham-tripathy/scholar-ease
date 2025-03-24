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
    document.querySelector("#addSchemePanel").parentElement.style.backdropFilter =
      "blur(10px)";
  }, 200);
};

export const closeAddSchemePanel = () => {
  document.querySelector("#addSchemePanel").parentElement.style.scale = "0";
  document.querySelector("#addSchemePanel").parentElement.style.backdropFilter =
    "blur(0px)";
};