import jsonData from "./data.json";
import CountryCard from "./components/CountryCard";

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
    <div className="px-12">
      <ul>
        {jsonData.map((country) => (
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
  );
}

export default App;
// <li key={country.alpha3Code }>
//   <img src={country.flag} alt="" />
//   <h2>{country.name}</h2>
//   <p>
//     Population: <span>{country.population}</span>
//   </p>
//   <p>Region: {country.region}</p>
//   <p>Capital: {country.capital}</p>
// </li>
