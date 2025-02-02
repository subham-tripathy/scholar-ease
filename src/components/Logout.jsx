import React from "react";

const Logout = () => {
  localStorage.removeItem("uid");
  return <></>;
};

export default Logout;
