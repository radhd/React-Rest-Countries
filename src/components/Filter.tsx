import Form from "react-bootstrap/Form";

function SelectBasicExample() {
  const handleClick = (event) => {
    console.log(event.target.value);
  };
  return (
    <Form.Select
      className="mb-5 bg-white p-2"
      aria-label="Default select example"
      onClick={handleClick}
    >
      <option>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
