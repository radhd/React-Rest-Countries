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

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const allCountries = jsonData.map((country: Country) => (
    <CountryCard
      key={country.alpha3Code}
      flag={country.flag}
      country={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital || ""}
      alpha3Code={""}
    />
  ));

  const filteredArr = allCountries.filter((item) => {
    return item.props.country
      .toLowerCase()
      .includes(searchValue.trim().toLowerCase());
  });

  if (filteredArr.length > 0) {
    filteredArr.map((item) => (
      <CountryCard
        key={item.props.alpha3Code}
        flag={item.props.flag}
        country={item.props.name}
        population={item.props.population}
        region={item.props.region}
        capital={item.props.capital || ""}
        alpha3Code={""}
      />
    ));
  } else {
    <li>NO MATCHES</li>;
  }

  return (
    <>
      <Header />
      <div className="bg-veryLightGray dark:bg-darkBlue h-screen">
        <Search onSearch={onSearch} searchValue={searchValue} />
        <div className="px-12 pt-5">
          <Filter />
          <ul>{filteredArr}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
