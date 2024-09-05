import { useState } from "react";

const ArrOfObjState = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (i) => {
    setCars(cars.filter((_, index) => index !== i));
  };

  const handleYearChange = (event) => {
    setCarYear(event.target.value);
  };

  const handleMakeChange = (event) => {
    setCarMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div className="objArrCont">
      <h1>Array Of Objects In State</h1>
      <h2>List of car objects</h2>
      <ul>
        {cars.map((car, index) => {
          return (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make}, {car.model}
            </li>
          );
        })}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default ArrOfObjState;
