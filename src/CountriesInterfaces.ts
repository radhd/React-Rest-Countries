interface CountryInterfaces {
  name: string;
  official_name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  cioc: string;
  numericCode: string;
  callingCode: string;
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latLng: {
    country: number[];
    capital: number[];
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  area: number;
  gini: {
    [year: number]: number;
  };
  timezones: string[];
  borders: string[];
  nativeNames: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [code: string]: string;
  };
  translations: {
    [lang: string]: string;
  };
  flag: {
    small: string;
    medium: string;
    large: string;
  };
  regionalBlocs: {
    acronym: string;
    name: string;
  }[];
}

export default CountryInterfaces;
