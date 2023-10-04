// Import statements at the top of the file
import React, { useState, useEffect } from 'react';
import './orderdisplay.css'; // Import your CSS file

function StarbucksRandomizer() {
  const [selectedSize, setSelectedSize] = useState('');
  const [randomDrink, setRandomDrink] = useState('');
  const [randomOrder, setRandomOrder] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  // Event handler for the "Randomize Drink" button
  const handleRandomizeDrink = () => {
    resetOrder();
    setLoading(true);

    setTimeout(() => {
      const drink = getRandomDrink();
      setRandomDrink(drink);
      setLoading(false);
    }, 2000);
  };

  // Event handler for the "Randomize Food" button
  const handleRandomizeOrder = () => {
    resetOrder();
    setLoading(true);

    setTimeout(() => {
      const food = getRandomFood();
      const drink = getRandomDrink();
      setRandomOrder(`Today's order is a ${selectedSize} ${drink} with ${food} on the side.`);
      setLoading(false);
    }, 2000);
  };

  // Event handler for the "Customize" button
  const handleCustomize = () => {
    resetOrder();
    setShowCustomize(true);
  };

  // Function to reset the order
  function resetOrder() {
    setSelectedSize('');
    setRandomDrink('');
    setRandomOrder('');
    setLoading(false);
  }

  // Function to get a random drink
  function getRandomDrink() {
    const yourDrink = Math.floor(Math.random() * 7);

    switch (yourDrink) {
      case 0:
        setSelectedSize(getRandomSize());
        return getRandomHotDrink();
      case 1:
        setSelectedSize(getRandomSize());
        return getRandomColdDrink();
      case 2:
        setSelectedSize(getRandomSize());
        return getRandomTea();
      case 3:
        setSelectedSize(getRandomSize());
        return getRandomRefresher();
      case 4:
        setSelectedSize(getRandomSize());
        return getRandomFrappucino();
      case 5:
        setSelectedSize(getRandomSize());
        return getRandomFood();
      case 6:
        setSelectedSize(getRandomSize());
        return getSeasonalItem();
      default:
        return 'Unknown category';
    }
  }
}

  // Define your drink-related functions here
function getRandomSize() {
    const size = ["Grande", "Venti", "Trenta"];
    const randomSize = size[Math.floor(Math.random() * size.length)];
    return `${randomSize}`;
  }

function getRandomHotDrink() {
  const hotDrinkOptions = [
    "Featured Blonde Roast",
    "Featured Medium Roast",
    "Featured Dark",
    "Featured Blonde Roast Veranda Blend",
    "Featured Decaf Roast Decaf",
    "Cafe Misto",
    "Caffè Americano",
    "Cappuccino",
    "Caffè Latte",
    "Caffè Mocha",
    "Flat White",
    "Espresso",
    "Espresso Con Panna",
    "Macchiato",
    "Drip Coffee",
    "Pour-Over Coffee",
    "French Press Coffee",
    "Caffè Americano Misto",
    "Café Au Lait",
    "Cinnamon Dolce Latte",
    "White Chocolate Mocha",
    "Caramel Macchiato",
    "Honey Almondmilk Flat White",
    "Caramel Flan Latte",
    "Toasted White Chocolate Mocha",
    "Chestnut Praline Latte",
    "Flat white",
    "Honey Almondmilk Flat White",
    "Pumpkin Spice Latte",
    "Oleato Caffe Latte with Oatmilk",
    "Starbucks Reserve Latte",
    "Starbucks Reserve Hazelnut Bianco Latte",
    "Starbucks Blonde Vanilla Latte",
    "Apple Crisp Oatmilk Macchiato",
    "Espresso Macchiato",
    "Caffe Mocha",
    "Starbucks Reserve Dark Chocolate Mocha",
  ];
  const randomDrink = hotDrinkOptions[Math.floor(Math.random() * hotDrinkOptions.length)];
  return `${randomDrink}`;
}

function getRandomColdDrink() {
  const icedDrinkOptions = [
    "Iced Coffee",
    "Starbucks Cold Brew Coffee",
    "Starbucks Cold Brew Coffee with Milk",
    "Vanilla Sweet Cream Cold Brew",
    "Pumpkin Cream Cold Brew",
    "Cinnamon Caramel Cream Cold Brew",
    "Chocolate Cream Cold Brew",
    "Starbucks Reserve Cold Brew",
    "Nitro Cold Brew",
    "Cinnamon Caramel Cream Nitro Cold Brew",
    "Starbucks Reserve Nitro Cold Brew",
    "Vanilla Sweet Cream Nitro Cold Brew",
    "Iced Coffee",
    "Iced Coffee with Milk",
    "Iced Espresso",
    "Iced Apple Crisp Oatmilk Shaken Espresso",
    "Oleato Iced Shaken Espresso with Oatmilk and Toffeenut",
    "Iced Toasted Vanilla Oatmilk Shaken Espresso",
    "Iced Brown Sugar Oatmilk Shaken Espresso",
    "Iced Chocolate Almondmilk Shaken Espresso",
    "Iced Shaken Espresso",
    "Iced Caffe Americano",
    "Iced Flat White",
    "Iced Honey Almondmilk Flat White",
    "Iced Cappuccino",
    "Iced Latte",
    "Iced Caffe Latte",
    "Iced Pumpkin Spice Latte",
    "Starbucks Reserve Iced Latte",
    "Starbucks Reserve Iced Hazelnut Bianco Latte",
    "Iced Cinnamon Dolce Latte",
    "Iced Starbucks Blonde Vanilla Latte",
    "Iced Apple Crisp Oatmilk Macchiato",
    "Iced Caramel Macchiato",
    "Iced White Chocolate Mocha",
    "Iced Caffe Mocha",
    "Starbucks Reserve Iced Dark Chocolate Mocha"
  ];
  
  const randomDrink = icedDrinkOptions[Math.floor(Math.random() * icedDrinkOptions.length)];
  return `${randomDrink}`;
}

function getRandomTea() {
  const teaOptions = [
    "Teavana London Fog Tea Latte",
    "Royal English Breakfast Tea",
    "Royal English Breakfast Tea Latte",
    "Matcha Tea Latte",
    "Chai Tea",
    "Chai Tea Latte",
    "Iced Passion Tango Tea",
    "Iced Green Tea",
    "Iced Black Tea",
    "Iced Black Tea Lemonade",
    "Iced Royal English Breakfast Tea Latte",
    "Emperor's Clouds & Mist",
    "Iced London Fog Tea Latte",
    "Iced Pumpkin Cream Chai Tea Latte",
    "Iced Chai Tea Latte",
    "Iced Peach Green Tea",
    "Iced Peach Green Tea Lemonade",
    "Iced Matcha Tea Latte",
    "Iced Green Tea",
    "Iced Green Tea Lemonade",
    "Iced Matcha Lemonade",
    "Iced Passion Tango Tea",
    "Iced Passion Tango Tea Lemonade",
    "White Tea",
    "Mint Majesty Tea",
    "Peach Tranquility Herbal Tea",
    "Jade Citrus Mint Tea",
    "Earl Grey Tea"
  ];
  
  const randomDrink = teaOptions[Math.floor(Math.random() * teaOptions.length)];
  return `${randomDrink}`;
}

function getRandomRefresher() {
  const refresherOptions = [
    "Strawberry Acai Refresher",
    "Frozen Pineapple Passionfruit Lemonade Refresher",
    "Frozen Strawberry Acai Refresher",
    "Frozen Mango Dragonfruit Lemonade Refresher",
    "Paradise Drink Refresher",
    "Pineapple Passionfruit Refresher",
    "Mango Dragonfruit Refresher",
    "Pink Drink Refresher",
    "Strawberry Acai Lemonade Refresher",
    "Dragon Drink Refresher",
    "Mango Dragonfruit Refresher",
    "Mango Dragonfruit Lemonade Refresher"
  ];
  
  const randomDrink = refresherOptions[Math.floor(Math.random() * refresherOptions.length)];
  return `${randomDrink}`;
}

function getRandomFrappucino() {
  const frappuccinoOptions = [
    "Apple Crisp Oatmilk Frappuccino Blended Beverage",
    "Pumpkin Spice Frappuccino Blended Beverage",
    "Mocha Cookie Crumble Frappuccino Blended Beverage",
    "Caramel Ribbon Crunch Frappuccino Blended Beverage",
    "Espresso Frappuccino Blended Beverage",
    "Caffe Vanilla Frappuccino Blended Beverage",
    "Caramel Frappuccino Blended Beverage",
    "Coffee Frappuccino Blended Beverage",
    "Mocha Frappuccino Blended Beverage",
    "Java Chip Frappuccino Blended Beverage",
    "White Chocolate Mocha Frappuccino Blended Beverage",
    "Apple Crisp Oatmilk Creme Frappuccino Blended Beverage",
    "Pumpkin Spice Creme Frappuccino Blended Beverage",
    "Chocolate Cookie Crumble Creme Frappuccino",
    "Caramel Ribbon Crunch Creme Frappuccino Blended Beverage",
    "Strawberry Creme Frappuccino Blended Beverage",
    "Chai Creme Frappuccino Blended Beverage",
    "Double Chocolaty Chip Creme Frappuccino Blended Beverage",
    "Matcha Creme Frappuccino Blended Beverage",
    "Vanilla Bean Creme Frappuccino Blended Beverage",
    "White Chocolate Creme Frappuccino Blended Beverage"
  ];

  const randomDrink = frappuccinoOptions[Math.floor(Math.random()*frappuccinoOptions.length)] ;
  return  ` ${randomDrink}`;
}

function getRandomFood() {
  const foodOptions = [
  "Bacon, Sausage & Egg Wrap",
  "Impossible Breakfast Sandwich",
  "Bacon, Gouda & Egg Sandwich",
  "Double-Smoked Cheddar & Egg Sandwich",
  "Turkey Bacon, Cheddar & Egg White Sandwich",
  "Sausage, Cheddar & Egg Sandwich",
  "Spinach, Feta & Egg White Wrap",
  "Plain Bagel",
  "Everything Bagel",
  "Chocolate Chip Cookie",
  "Baked Apple Croissant",
  "Ham & Swiss Croissant",
  "Butter Croissant",
  "Chocolate Croissant",
  "Cinnamon Coffee Cake",
  "Iced Lemon Loaf",
  "Pumpkin & Pepita Loaf",
  "Banana Walnut & Pecan Loaf",
  "Cheese Danish",
  "Glazed Doughnut",
  "Pumpkin Cream Cheese Muffin",
  "Blueberry Scone",
  "Petite Vanilla Bean Scone",
  "Blueberry Muffin",
  "Rolled & Steel-cut Oatmeal",
  "Berry Trio Parfait",
  "Crispy Grilled Cheese on Sourdough",
  "Ham & Swiss on Baguette",
  "Turkey, Provolone & Pesto on Ciabatta",
  "Tomato & Mozzarella on Focaccia"
];
  const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
  return `${randomFood}`;
}

function getSeasonalItem() {
  const seasonalItems = [
    "Iced Pumpkin Cream Chai tea Latte",
    "Pumpkin Spice Latte",
    "Pumpkin Cream Cold Brew",
    "Iced Apple Crisp Oatmilk Shaken Espresso",
    "Pumpkin Cream Cheese Muffin",
    "Baked Apple Croissant",
  ];

  const randomSeasonalItem = seasonalItems[Math.floor(Math.random() * seasonalItems.length)];
  return `${randomSeasonalItem}`;
}

useEffect(() => {
   // You can access the current values of your state variables here
   console.log('loading:', loading);
   console.log('randomDrink:', randomDrink);
   console.log('randomOrder:', randomOrder);
   console.log('selectedSize:', selectedSize);
   console.log('showCustomize:', showCustomize);

}, [loading, randomDrink, randomOrder, selectedSize, showCustomize]);

return (
  <div className="theme-default">
    <main>
      <div className="randomizer-container">
        <h2><i className="fa-solid fa-mug-hot"></i> Your Random Order:</h2>
        {loading && <p>Loading...</p>}
        {selectedSize && randomDrink && <p>Your drink is a {selectedSize} {randomDrink}.</p>}
        {randomOrder && <p>{randomOrder}</p>}

        {/* Show the buttons based on the state */}
        <button onClick={handleRandomizeOrder} id="randomize-btn">Meal</button>
        <button onClick={handleRandomizeDrink} id="drink-btn"> Drink</button>
        {!showCustomize && (
          <button id="customize-btn">Customize</button>
        )}

        {showCustomize && (
          <div>
            {/* Customize buttons */}
          </div>
        )}
      </div>
    </main>
  </div>
);
}

export default StarbucksRandomizer;
