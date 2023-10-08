import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src="/assets/starbucks.png" alt="Starbucks Logo" className="logo" />
        <h1>Welcome to the Starbucks Randomizer!</h1>
      </div>
      <p>Are you feeling adventurous or just can't decide what to order at Starbucks today? Let the Randomizer help you discover something new!</p>
    </header>
  );
}

export default Header;
