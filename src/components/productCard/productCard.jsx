import "./productCard.css";
function ProductCard({ image, name,description, price, onClick }) {
  return (
    <article className="product-card"  onClick={onClick}>

      <img  src={image} alt={name}  />

      <div className="product-info">

        <h3>{name}</h3>

        <p>{description}</p>

        <span className="price">
          {price}
        </span>

        <button className="add-btn">
          AGREGAR (+)
        </button>

      </div>

    </article>
  );
}

export default ProductCard;