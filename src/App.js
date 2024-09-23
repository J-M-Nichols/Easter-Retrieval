import { Route, Routes } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div 
      className="mt-5 p-5 mb-5 pb-5"
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
