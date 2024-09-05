import { useState } from "react";

const ArrayState = () => {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  };

  const handleRemoveFood = (i) => {
    setFoods(foods.filter((_, index) => index !== i));
  };

  return (
    <div className="arrContainer">
      <h1>Update Arrays In State</h1>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, i) => {
          return (
            <li key={i} onClick={() => handleRemoveFood(i)}>
              {food}
            </li>
          );
        })}
      </ul>
      <input type="text" placeholder="Enter Food" id="foodInput" />
      <button onClick={handleAddFood}>Add Food</button>
      <hr />
    </div>
  );
};

export default ArrayState;
