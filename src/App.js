import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Game from "./components/game/Game";
import './App.css'
import NavigationBar from "./components/NavigationBar";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div >
      <NavigationBar />
      <main
        className="mt-5 p-5 mb-5 pb-5"
      >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/play' element={<Game />} />
          <Route exact path='/about-me' element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
