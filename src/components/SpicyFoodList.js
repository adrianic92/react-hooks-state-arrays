import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data/index.js";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    }
    else {
      return food.cuisine === filterBy;
    }
  })

  
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
        <option value="Jamaican">Jamaican</option>
        <option value="Bangladeshi">Bangladeshi</option>
        <option value="Korean">Korean</option>
        <option value="Peruvian">Peruvian</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
