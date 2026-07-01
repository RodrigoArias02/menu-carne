import "./compraModal.css";
import { useState } from "react";
import { ShopIcon,PhoneIcon,PencilIcon,ClockIcon,CheckIcon } from "../../utils/icons";

import ButtonPay from "./buttonsPay";
import AddressMap from "./addressMap";
import ButtonIcon from "../buttons/buttonIcon.jsx";

function ComprarModal() {
  const hours = ["12hs", "13hs", "14hs", "19hs", "20hs", "21hs"];
  const [hour, setHour] = useState("19hs");

  return (
    <div className="div-modalCompra">
      <h3>
        <span><ShopIcon/></span>Datos de entrega
      </h3>
      <div className="div-input">
        <label>Nombre y apellido</label>
        <div className="input">
          <span><PencilIcon/></span>
           <input type="text" placeholder="Ej: Juan Perez" />
        </div>
      </div>
      <div className="div-input">
        <label>Telefono</label>
        <div className="input">
          <span><PhoneIcon/></span>
           <input type="text" placeholder="Ej: 2262 123456"/>
        </div>
      </div>
      <ButtonPay />
      <div className="div-hour">
        <h3>
          <span><ClockIcon/></span> Horario de envio
        </h3>
        <div className="hours">
          {hours.map((h) => (
            <button
              key={h}
              type="button"
              className={hour === h ? "hour active" : "hour"}
              onClick={() => setHour(h)}
            >
              {h}
            </button>
          ))}
        </div>
      </div>
      <AddressMap/>
     
      <div className="total">
        <hr />
        <article>
                  <p>
          <span>Subtotal</span>
          <span>$1800</span>
        </p>
        <p>
          <span>Envio</span>
          <span>$1800</span>
        </p>
        </article>

        <hr />
        <p className="total-p">
          <span>TOTAL</span>
          <span>$400</span>
        </p>
      </div>
      <ButtonIcon clase="btnAddCart" nombre="CONFIRMAR PEDIDO" onclick={""} icon={<CheckIcon />} />
    </div>
  );
}

export default ComprarModal;
