import { Country } from "../CountriesInterfaces";

export const fetchData = async (
  search: string,
): Promise<Country | undefined> => {
  try {
    const response = await fetch(
      `https://countryapi.io/api/name/${search}?apikey=Bhf7Y3lJCcetZNLycphjoGU9ZGePFCeeHCPsBQny`,
    );
    if (!response.ok) {
      throw new Error("failed to fetch countries");
    }
    const userData: Country = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return undefined;
  }
};

export const fetchAll = async () => {
  try {
    const response = await fetch(
      "https://countryapi.io/api/all?apikey=Bhf7Y3lJCcetZNLycphjoGU9ZGePFCeeHCPsBQny",
    );
    if (!response.ok) {
      throw new Error("failed to fetch countries");
    }
    const allCountries: Country = await response.json();
    console.log(allCountries);
    return allCountries;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return undefined;
  }
};

// fetchAll();
