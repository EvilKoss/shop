import React from 'react';
import style from './App.css';
import ShopContainer from './components/Shop/ShopContainer';
import WorkersContainer from './components/Workers/WorkersContainer';

function App() {
  return (
    <div className = 'app'>
		<ShopContainer />
		<WorkersContainer />
    </div>
  );
}

export default App;
