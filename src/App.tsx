import jsonData from "./data.json";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import Search from "./components/Search";

interface Country {
  alpha3Code: string;
  flag: string;
  name: string;
  population: number;
  region: string;
  capital?: string;
}

function App() {
  return (
    <>
      <Header />
      <div className="bg-veryLightGray dark:bg-darkBlue px-12 pt-5">
        <ul>
          {jsonData.map((country: Country) => (
            <CountryCard
              key={country.alpha3Code}
              flag={country.flag}
              country={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital || ""}
              alpha3Code={""}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
