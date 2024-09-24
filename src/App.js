import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Game from "./components/game/Game";

const App = () => {
  return (
    <div 
      className="mt-5 p-5 mb-5 pb-5"
    >
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/play' element={<Game />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
