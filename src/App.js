import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar>
        <Routes>
          <Route>
          <Route path="/" element={<Home />} />
         
         
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
