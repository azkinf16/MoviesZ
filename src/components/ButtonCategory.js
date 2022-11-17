import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonCategory() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/category/${e.target.value}`);
  };

  return (
    <>
      <select
        className="w-1/2 p-2.5 text-slate-100 bg-slate-900 border rounded-md shadow-sm outline-none focus:border-slate-500"
        onChange={(e) => handleClick(e)}
      >
        <option disabled selected>
          Select Category..
        </option>
        <option value={"horror/27"}>Horror</option>
        <option value={"drama/18"}>Drama</option>
        <option value={"animation/16"}>Animation</option>
        <option value={"thriller/53"}>Thriller</option>
        <option value={"family/10751"}>Family</option>
        <option value={"adventure/12"}>Adventure</option>
        <option value={"fantasy/14"}>Fantasy</option>
        <option value={"comedy/35"}>Comedy</option>
      </select>
    </>
  );
}

export default ButtonCategory;
