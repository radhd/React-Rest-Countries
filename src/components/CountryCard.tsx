 

interface CountryCardProps {
  alpha3Code: string;
  flag: string;
  country: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  borders: string[];
  subregion: string;
  domain: string[];
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

function CountryCard(props: CountryCardProps) {
  const { alpha3Code, flag, country, population, region, capital } = props;

  return (
    <>
      <div
        className="border-1 lg:margin-auto mb-10 rounded-lg bg-white text-start shadow-lg dark:bg-darkBlue lg:mb-0 lg:w-72"
        key={alpha3Code}
      >
        <img
          className="rounded-t-lg pb-5 lg:h-52 lg:w-full"
          src={flag}
          alt=""
        />
        <div className="px-5 pb-7 lg:px-2 lg:pb-3">
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
      </div>
    </>
  );
}

export default CountryCard;
