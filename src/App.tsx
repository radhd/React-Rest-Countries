import jsonData from "./data.json";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";
import Filter from "./components/Filter";

interface Country {
  alpha3Code: string;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital?: string;
}

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState(null);

  function handleClick(event) {
    setRegion(event.target.value);
    console.log();
  }

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const renderCountryCard = (country) => (
    <CountryCard
      key={country.alpha3Code}
      flag={country.flag}
      country={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital || ""}
      alpha3Code={country.alpha3Code}
    />
  );

  const allCountries = jsonData.map(renderCountryCard);

  const filteredArr = allCountries.filter((item) => {
    return item.props.country
      .toLowerCase()
      .includes(searchValue.trim().toLowerCase());
  });

  return (
    <>
      <Header />
      <div className="bg-veryLightGray dark:bg-darkBlue h-screen">
        <Search onSearch={onSearch} searchValue={searchValue} />
        <div className="px-12 pt-5">
          <Filter onClick={handleClick} />
          <ul>{filteredArr.length > 0 ? filteredArr : <li>NO MATCHES</li>}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
