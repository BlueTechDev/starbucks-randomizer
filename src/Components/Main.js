import React from 'react';

function Main() {
  return (
    <main>
    <div class="randomizer-container">
      <h2><i class="fa-solid fa-mug-hot"></i> Your Random Order:</h2>
      <p id="random-order"></p>
      <p id="random-drink"></p>
      <button id="randomize-btn">Meal</button>
      <button id="drink-btn"> Drink</button>
      <button id="customize-btn">Customize</button>
      <button id="reset-btn">Reset</button>

      
      <button id="hot-btn" class="hidden">Hot Coffee</button>
      <button id="cold-btn" class="hidden">Cold Coffee</button>
      <button id="refresh-btn" class="hidden">Refresher</button>
      <button id="tea-btn" class="hidden">Tea</button>
      <button id="frappe-btn" class="hidden">Frappucino</button>
      <button id="seasonal-btn" class="hidden">Seasonal</button>

      <button id="logout-btn">Log Out</button>

      <i id="loading-icon" class="fa-regular fa-star loading-icon"></i>
    </div>
    
  </main>
  );
}

export default Main;
