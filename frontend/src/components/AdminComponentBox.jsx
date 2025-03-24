import React from "react";
import { Link } from "react-router-dom";

const AdminComponentBox = ({ name, path }) => {
  return (
    <div className="bg-blue-700 p-4 m-4 rounded-md shadow-md shadow-black w-[300px] h-[150px] flex flex-col justify-evenly items-center text-white dark:bg-[#181818] dark:text-blue-700 dark:shadow-md dark:shadow-blue-700">
      <h1 className="text-xl">{name}</h1>
      <hr className="w-full" />
      <Link className="hover:scale-125 flex gap-1 items-center" to={path}>
        View
        <img src="/images/white-right-arrow.png" className="h-[25px] rounded-full p-1 border-2 border-white dark:border-blue-700" />
      </Link>
    </div>
  );
};

export default AdminComponentBox;
