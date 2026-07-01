import "./productCard.css";
import notFound from "../../assets/notFoundCard.png"

function ProductCard({ image, name,description, price, offer, onClick }) {
  return (
    <article className="product-card"  onClick={onClick}>
      <article className={offer==null?"cart-off none" : "cart-off"}>
        <p><b>•</b> OFERTA  <b>•</b></p>
        <p>{offer?.kg+"kg"}</p>
        <p>OFF</p>
      </article>
      <img src={image || notFound} alt={name} onError={(e) => { e.currentTarget.src = notFound;}}/>
      <div className="product-info">

        <h3>{name}</h3>

        <p>{description}</p>

        <p className="prices">
          <span className="price">
          ${offer!=null ? offer.price/offer.kg : price}
          </span>
          <span>{offer!=null ? "$" + price: ""}</span>
        </p>


        <button className="add-btn">
          AGREGAR (+)
        </button>

      </div>

    </article>
  );
}

export default ProductCard;