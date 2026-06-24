
const ProductDetail = ({price}) => {
  console.log(price)
    return(
        <div className="product-details">
          <section className="price-normal">
            <p>Precio Normal</p>
             <p>${price} / kg</p>
          </section>
          <section className="price-offer">
            <p>Oferta 2kg</p>
            <span className="price-card">
              <p>$2040</p>
              <p className='p-discuent'>-15%</p>
            </span>
            <p>($1020 / kg)</p>
          </section>
        </div>
    );
 
};

export default ProductDetail;
