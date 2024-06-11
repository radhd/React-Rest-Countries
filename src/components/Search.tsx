import { useState } from "react";
import jsonData from "../data.json";
import CountryCard from "./CountryCard";

function Search({ onSearch, searchValue }) {
  return (
    <>
      <label htmlFor="">
        Countries input
        <input
          className="border-4 outline-none"
          type="text"
          value={searchValue}
          onChange={onSearch}
        />
      </label>
    </>
  );
}

export default Search;
