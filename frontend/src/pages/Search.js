import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "./Search.css";

export default function Search() {
  const [q, setQ] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/products?q=");
      setData(res.data);
    } catch (err) {
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };

  const search = async () => {
    if (!q.trim()) {
      loadAllProducts();
      return;
    }
    setLoading(true);
    try {
      const res = await api.get(`/products?q=${q}`);
      setData(res.data);
    } catch (err) {
      console.error("Error searching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h1>Search Products</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by product name..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button onClick={search} className="search-btn">Search</button>
        </div>
      </div>

      {loading && <p className="loading">Loading...</p>}

      {!loading && data.length === 0 && (
        <p className="no-results">No products found</p>
      )}

      <div className="products-grid">
        {data.map((p) => (
          <div
            key={p.id}
            className="product-card"
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <div className="product-image">
              {p.image ? (
                <img src={p.image} alt={p.name} />
              ) : (
                <div className="no-image">No Image</div>
              )}
            </div>
            <div className="product-info">
              <h3>{p.name}</h3>
              <p className="description">{p.description?.substring(0, 100)}...</p>
              <div className="product-details">
                <span className="price">₹{p.price}</span>
                <span className={`stock ${p.stock > 0 ? "in-stock" : "out-stock"}`}>
                  {p.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <p className="sku">SKU: {p.sku}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}