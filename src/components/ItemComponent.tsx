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
    <div>
      <button onClick={onClick}>Back</button>
      <div>
        <img src={country.flag} alt="" />
        <h2>{country.country}</h2>
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
  );
}

export default ItemComponent;
