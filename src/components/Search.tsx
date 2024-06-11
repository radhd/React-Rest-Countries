import { useState } from "react";
import jsonData from "../data.json";
import CountryCard from "./CountryCard";

interface SearchProps {
  searchValue: string;
  onSearch: (value: string) => void;
}

function Search(props: SearchProps) {
  const { searchValue, onSearch } = props;
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
