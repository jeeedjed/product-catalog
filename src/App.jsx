import { useState, useEffect } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // cart state (from Lab 3)
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // search and filter state
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  function handleAddToCart(title) {
    setCount(count + 1);
    setLastAdded(title);
  }

  function handleClear() {
    setSearchText("");
    setCategory("All");
    setSortOrder("default");
  }

  // debounce effect: wait 300ms after the user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer); // cleanup
  }, [searchText]);

  // filter and sort (a copy is made, the original array is not changed)
  const filteredProducts = [...products]
    .filter((p) =>
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter((p) => category === "All" || p.category === category)
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  // update the browser tab title when the number of results changes
  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);

  return (
    <div className="app">
      <div className="header">
        <h1>CvSU Mini Store</h1>
        <p>Your one-stop shop for school essentials</p>
      </div>

      <p className="cart-message">
        {count === 0
          ? "Your cart is empty."
          : `Items added to cart: ${count} (Last added: ${lastAdded})`}
      </p>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        onClear={handleClear}
      />

      <p className="result-count">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <span>😕</span>
          <p>No products found. Try a different keyword or category.</p>
        </div>
      ) : (
        <div className="grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >
              {product.id === 1 && <span className="badge">New</span>}
              {product.id === 5 && <span className="badge sale">Sale</span>}
            </ProductCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;