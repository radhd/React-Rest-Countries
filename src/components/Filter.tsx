import Form from "react-bootstrap/Form";
import { useState } from "react";

function SelectBasicExample({ onClick }) {
  return (
    <Form.Select
      className="mb-5 rounded-md bg-white p-2 shadow-lg dark:bg-darkBlue dark:text-slate-100"
      aria-label="Default select example"
      onClick={onClick}
    >
      <option>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
