import React from 'react';
import FoodAPI from './Food/FoodAPI.js';
import Star from './Star.js';
import State from './State.js';

function App() {
  return (
    <div>
      <State/>
      <Star/>
      <hr/>
      <FoodAPI/>
    </div>
  );
}

export default App;
