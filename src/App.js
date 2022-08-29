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
     <Navbar></Navbar>
        <Routes>
          <Route>
          <Route path="/" element={<Home></Home>} />
          <Route path="blog/:id/" element={<Home></Home>} />
          </Route>
        </Routes>
       
       
  
    </div>
  );
}

export default App;
