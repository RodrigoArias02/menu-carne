import "./contentModalCart.css";
import Quantity from "../contentModalCard/quantity.jsx";
function ContentModalCart({ cart }) {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-modal">
      <header className="cart-header">
        <div>
          <h2>Mi Carrito</h2>
          <p>{cart.length} productos</p>
        </div>
      </header>

      <div className="cart-products">
        {cart.map((product) => (
          <article className="cart-product" key={product.id}>
            <div className="container-img-cart">
              <img src={product.image} alt={product.name} />    
            </div>
            

            <div className="cart-info">
              <div className="cart-top">
                <div className="div-title-subtitle">
                  <h3>{product.name}</h3>
                  <p className="subtitle">{product.subtitle}</p>
                </div>
                <div className="cart-delete-price">
                  <button className="delete-btn">r</button>
                  <h4>{product.price * product.quantity}</h4>
                </div>
              </div>
              <section className="section-quantity-priceUnite">
                <p className="unit-price">${product.price} / kg</p>

                <div className="quantity-selector">
                  <Quantity initial={1} min={1} max={100} claseInput="paddingAndWidth"  />
                </div>
              </section>
            </div>
          </article>
        ))}
      </div>

      <div className="cart-offer">
        <p>
          ¡Llevando <strong>4 kg</strong> obtenés
          <strong> 10% de descuento</strong>!
        </p>
      </div>

      <div className="cart-summary">
        <div>
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        <div>
          <span>Descuento</span>
          <span className="discount">-$0</span>
        </div>

        <hr />

        <div className="total">
          <span>TOTAL</span>
          <span>${subtotal}</span>
        </div>
      </div>

      <button className="btn-whatsapp">ENVIAR PEDIDO POR WHATSAPP</button>

      <button className="btn-clear">VACIAR CARRITO</button>

      <footer className="cart-footer">
        Envíos en Necochea y zonas cercanas
      </footer>
    </div>
  );
}

export default ContentModalCart;
