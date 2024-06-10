import { Country } from "../CountriesInterfaces";

const apikey = "?apikey=Bhf7Y3lJCcetZNLycphjoGU9ZGePFCeeHCPsBQny";

export const fetchData = async (
  search: string,
): Promise<Country | undefined> => {
  try {
    const response = await fetch(
      `GET https://countryapi.io/api/name/${search + apikey}`,
    );
    if (!response.ok) {
      throw new Error("failed to fetch countries");
    }
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error("Error fetching data: ", error);
    return undefined;
  }
};
