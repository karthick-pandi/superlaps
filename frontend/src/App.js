import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import "./App.css";
import "../src/pages/Admin.css"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">ShopHub</Link>
            <ul className="nav-menu">
              <li><Link to="/">Search</Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </ul>
          </div>
        </nav> 
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;