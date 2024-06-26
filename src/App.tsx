import jsonData from "./data.json";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";
import Filter from "./components/Filter";
import ItemComponent from "./components/ItemComponent";
import CountryInterfaces from "./CountriesInterfaces";

interface Country {
  alpha3Code: string;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  borders: string[];
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("");
  const [selectedList, setSelectedList] = useState(null);
  const [tab, setTab] = useState("main");

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    setRegion(event.target.value);
  }

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const renderCountryCard = (country: Country) => (
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
      subregion={country.subregion}
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
      <div className="font-nunito dark:bg-veryDarkBlueBg dark:text-white">
        <Header />

        <div className="space-y-5 px-6 lg:px-10">
          {tab === "main" ? (
            <>
              <div className="space-y-3 lg:flex lg:justify-between">
                <Search onSearch={onSearch} searchValue={searchValue} />
                <Filter onClick={handleClick} />
              </div>
              <ul className="px-8 lg:flex lg:flex-wrap lg:justify-center lg:gap-16 lg:px-0">
                {renderList}
              </ul>
            </>
          ) : (
            selectedList && (
              <ItemComponent setTab={setTab} selectedList={selectedList} />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
