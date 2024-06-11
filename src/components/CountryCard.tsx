interface CountryCardProps {
  alpha3Code: string;
  flag: string;
  country: string;
  population: number;
  region: string;
  capital?: string;
}

function CountryCard(props: CountryCardProps) {
  const { alpha3Code, flag, country, population, region, capital } = props;
  return (
    <>
      <li className="border-1 mb-10 bg-white shadow-lg" key={alpha3Code}>
        <img src={flag} alt="" />
        <h2>{country}</h2>
        <p>
          Population: <span>{population}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </li>
    </>
  );
}

export default CountryCard;
