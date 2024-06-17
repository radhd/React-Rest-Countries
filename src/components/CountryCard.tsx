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
      <li
        className="border-1 mb-10 rounded-lg bg-white text-start shadow-lg dark:bg-darkBlue"
        key={alpha3Code}
      >
        <img className="rounded-t-lg pb-5" src={flag} alt="" />
        <div className="px-5 pb-7">
          <h2 className="mb-3 font-extraBold">{country}</h2>
          <div className="font-semiBold">
            <p>
              Population: <span className="font-light">{population}</span>
            </p>
            <p>
              Region: <span className="font-light">{region}</span>
            </p>
            <p>
              Capital: <span className="font-light">{capital}</span>
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CountryCard;
