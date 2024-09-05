import { useState } from "react";

const ObjectState = () => {
  const [car, setCar] = useState({
    year: 2020,
    make: "lamborghini",
    model: "svj",
  });

  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };

  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };

  const handleModelChange = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div className="container">
      <h1>Update Objects in State</h1>
      <p>
        You favourite car is a: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
      <hr />
    </div>
  );
};

export default ObjectState;
