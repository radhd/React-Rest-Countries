function ItemComponent({ tab, setTab }) {
  const onClick = () => {
    setTab("main");
  };

  return (
    <div>
      <button onClick={onClick}>Back</button>
      <div>
        <p>hello</p>
      </div>
    </div>
  );
}

export default ItemComponent;
