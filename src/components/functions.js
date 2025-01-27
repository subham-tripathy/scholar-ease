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

