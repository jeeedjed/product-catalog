import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice =
    "₱" +
    price.toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className={inStock ? "card" : "card out-of-stock"}>
      {children}
      <p className="category">{category}</p>
      <h3 className="title">{title}</h3>
      <p className="price">{formattedPrice}</p>

      {inStock ? (
        <span className="label in">● In Stock</span>
      ) : (
        <span className="label out">● Out of Stock</span>
      )}

      <button disabled={!inStock} onClick={() => onAddToCart(title)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;