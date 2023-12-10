import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import ProductsPage from "./Components/ProductsPage";
import CompanyProfile from "./Components/CompanyProfile";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/products" Component={ProductsPage} />
          <Route path="/company" Component={CompanyProfile} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
