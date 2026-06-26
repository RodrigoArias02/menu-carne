import { useState } from 'react';

const Quantity = ({ initial, min, max, onChange, claseInput }) => {
  const [quantity, setQuantity] = useState(initial);
  console.log(claseInput)
  const updateQuantity = (nextValue) => {
    const value = Math.max(min, Math.min(max, nextValue));
    setQuantity(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="quantity">
      <button type="button" onClick={() => updateQuantity(quantity - 1)} disabled={quantity <= min}>
        <i className="fa-solid fa-minus"></i>
      </button>
      <input
        type="number"
        value={quantity}
        min={min}
        max={max}
        readOnly
        className={claseInput}
      />
      <button
        type="button" onClick={() => updateQuantity(quantity + 1)}disabled={quantity >= max}>
          <i className="fa-solid fa-plus" ></i>
      </button>
    </div>
  );
};

export default Quantity;
