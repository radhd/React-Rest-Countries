import Country from "../CountriesInterfaces";

export const fetchAll = async (): Promise<Country[] | undefined> => {
  try {
    const response = await fetch(
      "https://countryapi.io/api/all?apikey=Bhf7Y3lJCcetZNLycphjoGU9ZGePFCeeHCPsBQny",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }

    const data: Country = await response.json();
    console.log("capital: ", data);
  } catch (error) {
    console.error("Error fetching data: ", error);
    return undefined;
  }
};
