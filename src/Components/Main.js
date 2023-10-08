import React, { useState, useEffect } from 'react';
import './Css/main.css';

function Main() {
  const [selectedSize, setSelectedSize] = useState('');
  const [result, setResult] = useState('');
  const [isLoading] = useState(false); // Added back isLoading state



  function getRandomDrink() {
    const category = Math.floor(Math.random() * 5);

    let newSize; // Define a new variable for size
    setSelectedSize(newSize); // Set the selected size here (unreachable code)

    switch (category) {
      case 0:
        newSize = getRandomSize(); // Assign the size to newSize
        return getRandomHotDrink();
      case 1:
        newSize = getRandomSize();
        return getRandomColdDrink();
      case 2:
        newSize = getRandomSize();
        return getRandomTea();
      case 3:
        newSize = getRandomSize();
        return getRandomRefresher();
      case 4:
        newSize = getRandomSize();
        return getRandomFrappucino();
      case 5:
        newSize = getRandomSize();
        return getSeasonalItem();
      default:
        return "Unknown category";
    }
  }

  const getRandomSize = () => {
    const sizes = ['Grande', 'Venti', 'Trenta'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const getRandomHotDrink = () => {
    const hotDrinks = [
      "Featured Blonde Roast",
    "Featured Medium Roast",
    "Featured Dark",
    "Featured Blonde Roast Veranda Blend",
    "Featured Decaf Roast",
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
    return hotDrinks[Math.floor(Math.random() * hotDrinks.length)];
  };

  const getRandomColdDrink = () => {
    const coldDrinks = [
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
    return coldDrinks[Math.floor(Math.random() * coldDrinks.length)];
  };

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
  };

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


  // The handleDrinkClick function is used for the "Drink" button
  const handleDrinkClick = () => {
    const randomDrink = getRandomDrink();
    setResult(randomDrink);
  };

  const handleOrderClick = () => {
    let randomDrink = '';
    let food = getRandomFood();
    let randomSize = getRandomSize();
  
    setSelectedSize(randomSize);
  
    const randomOrder = `Today's order is a ${randomSize} ${randomDrink} with a ${food} on the side.`;
  
    console.log(randomOrder);
  };
  
  

  // The handleCustomizeClick function is used for the "Customize" button
  const handleCustomizeClick = () => {
    document.getElementById("randomize-btn").style.display = "none";
    document.getElementById("drink-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "none"; // hide logout button
    document.getElementById("hot-btn").style.display = "inline-block";
    document.getElementById("cold-btn").style.display = "inline-block";
    document.getElementById("frappe-btn").style.display = "inline-block";
    document.getElementById("tea-btn").style.display = "inline-block";
    document.getElementById("refresh-btn").style.display = "inline-block";
    document.getElementById("seasonal-btn").style.display = "inline-block";
    document.getElementById("customize-btn").style.display = "none";
    showResetButton();
  };

  const handleResetClick = () => {
    setSelectedSize('');
    setResult('');
  
     // Clear the content of the <p> tag
     document.getElementById("random-order").textContent = '';

    // Hide unnecessary buttons
    document.getElementById("cold-btn").style.display = "none";
    document.getElementById("hot-btn").style.display = "none";
    document.getElementById("frappe-btn").style.display = "none";
    document.getElementById("tea-btn").style.display = "none";
    document.getElementById("seasonal-btn").style.display = "none";
    document.getElementById("refresh-btn").style.display = "none";
  
    // Show the necessary buttons
    document.getElementById("customize-btn").style.display = "inline-block";
    document.getElementById("randomize-btn").style.display = "inline-block";
    document.getElementById("logout-btn").style.display = "inline-block";
    document.getElementById("drink-btn").style.display = "inline-block";
  };
  
  

  function showResetButton() {
    document.getElementById("reset-btn").style.display = "inline-block";
  }

  useEffect(() => {
    // Implement any side effects or additional logic here
  }, []);

  return (
    <main>
      <div className="randomizer-container">
        <h2>
          <i className="fa-solid fa-mug-hot"></i> Your Random Order:
        </h2>
        <p id='random-drink'>{`${selectedSize} ${result}`}</p>
        <p id="random-order">{`${selectedSize} ${result} ${getRandomFood()}`}</p>
        <button id="randomize-btn" onClick={handleOrderClick}>
          Randomize
        </button>
        <button id="drink-btn" onClick={handleDrinkClick}>
          Drink
        </button>
        <button id="customize-btn" onClick={handleCustomizeClick}>
          Customize
        </button>
        <button id="reset-btn" onClick={handleResetClick}>
          Reset
        </button>

        <button id="hot-btn" className="hidden">
          Hot Coffee
        </button>
        <button id="cold-btn" className="hidden">
          Cold Coffee
          </button>
        <button id="refresh-btn" className="hidden">
          Refresher
        </button>
        <button id="tea-btn" className="hidden">
            Tea
        </button>
        <button id="frappe-btn" className="hidden">
          Frappucino
          </button>
          <button id="seasonal-btn" className="hidden">
            Seasonal
          </button>

        
        <button id="logout-btn">Log Out</button>

        {isLoading && (
          <i id="loading-icon" className="fa-regular fa-star loading-icon"></i>
        )}
      </div>
    </main>
  );
}

export default Main;