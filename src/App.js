import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NewsLetter from "./Components/Footer/NewsLetter";


function App() {
  return (
    <div>


{/* https://emp.jobylon.com/applications/jobs/140699/thanks/?application_id=5161582 */}
      <Header></Header>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
      <Navbar>
        <Routes>
          <Route>
          <Route path="/" element={<Home></Home>} />
          </Route>
        </Routes>
       
       
      </Navbar>
    </div>
  );
}

export default App;
