import jsonData from "./data.json";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";
import Filter from "./components/Filter";
import ItemComponent from "./components/ItemComponent";

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
  const [selectedList, setSelectedList] = useState(null);
  const [tab, setTab] = useState("main");

  function handleClick(event) {
    setRegion(event.target.value);
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
      nativeName={country.nativeName}
      borders={country.borders}
      subRegion={country.subregion}
      domain={country.topLevelDomain}
      currencies={country.currencies}
      languages={country.languages}
    />
  );

  const allCountries = jsonData.map(renderCountryCard);

  const filteredArr = allCountries.filter((item) => {
    return item.props.country
      .toLowerCase()
      .includes(searchValue.trim().toLowerCase());
  });

  const filterByRegion = filteredArr.filter((item) => {
    return item.props.region === region;
  });

  const renderList =
    filterByRegion.length > 0 ? (
      filterByRegion.map((item, index) => (
        <li key={index}>
          <button onClick={() => handleListClick(item)}>{item}</button>
        </li>
      ))
    ) : filteredArr.length > 0 ? (
      filteredArr.map((item, index) => (
        <li key={index}>
          <button onClick={() => handleListClick(item)}>{item}</button>
        </li>
      ))
    ) : (
      <li>NO MATCHES</li>
    );

  const handleListClick = (item) => {
    setSelectedList(item);
    setTab(item.props.country);
  };

  return (
    <>
      <div className="h-screen dark:bg-darkBlue dark:text-white">
        <Header />

        {tab === "main" ? (
          <>
            <Search onSearch={onSearch} searchValue={searchValue} />
            <Filter onClick={handleClick} />
            <ul>{renderList}</ul>
          </>
        ) : (
          selectedList && (
            <ItemComponent setTab={setTab} selectedList={selectedList} />
          )
        )}
      </div>
    </>
  );
}

export default App;
