import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function ItemComponent(props) {
  const { setTab, selectedList } = props;

  const onClick = () => {
    setTab("main");
  };

  const country = selectedList.props;

  // console.log("Borders: ", country.borders);

  // const renderButtons = () => {
  //   return country.borders.map((country, index) => {
  //     console.log(country);
  //   });
  // };

  const renderLanguages = () => {
    return country.languages.map((languages) => languages.name).join(", ");
  };

  return (
    <div className="">
      <button
        className="my-5 flex items-center bg-white px-8 py-2 shadow-lg dark:bg-darkBlue"
        onClick={onClick}
      >
        <div className="relative ms-3">
          <ArrowLeftIcon className="absolute -left-8 size-6" />
          Back
        </div>
      </button>
      <div>
        <img src={country.flag} alt="" />
        <div className="space-y-6 py-7">
          <h2 className="mb-3 text-lg font-bold">{country.country}</h2>
          <ul>
            <li>Native Name: {country.nativeName}</li>
            <li>Populaiton: {country.population}</li>
            <li>Region: {country.region}</li>
            <li>Sub Region: {country.subRegion}</li>
            <li>Capital: {country.capital}</li>
          </ul>
          <ul>
            <li>Top Level Domain: {country.domain}</li>
            <li>Currencies: {country.currencies[0].code}</li>
            <li>Languages: {renderLanguages()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemComponent;
