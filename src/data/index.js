const spicyFoods = [
  { id: 1, name: "Buffalo Wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "Mapo Tofu", cuisine: "Sichuan", heatLevel: 6 },
];

let nextId = 3;

const newSpicyFoods = [
  {name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  {name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  {name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
  {name: "Vindaloo", cuisine: "Bangladeshi", heatLevel: 7},
  {name: "Cau-Cau", cuisine: "Peruvian", heatLevel: 6},
  {name: "Jerk Chicken", cuisine: "Jamaican", heatLevel: 8},
  {name: "Kimchi Jjigae", cuisine: "Korean", heatLevel: 9}
];

// Get one random spicy food from the array
function getNewRandomSpicyFood() {
  const index = Math.floor(Math.random() * newSpicyFoods.length);
  const newSpicyFood = { ...newSpicyFoods[index] };
  newSpicyFood.id = nextId;
  nextId++;
  return newSpicyFood;
}

export { spicyFoods, getNewRandomSpicyFood };
