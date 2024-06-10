import { useState } from "react";
import { fetchData } from "./fetchData";

function Search() {
//   const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    const data = fetchData(value);
    
  };

  return (
    <>
      <label htmlFor="">
        Countries input
        <input
          className="border-4 outline-none"
          onChange={(event) => onChange(event)}
          type="text"
        />
      </label>
    </>
  );
}

export default Search;
