import "./compraModal.css";
import { useState, useMemo } from "react";
import { ShopIcon,PhoneIcon,PencilIcon,ClockIcon,CheckIcon } from "../../utils/icons";
import {validarDatos} from "../../utils/products.js"
import {calcularEnvio} from "../../utils/shipping.js"
import ButtonPay from "./buttonsPay";
import AddressMap from "./addressMap";
import ButtonIcon from "../buttons/buttonIcon.jsx";
import {useCart} from "../../hooks/useCart.jsx"
import { generarMensajePedido } from "../../utils/shipping.js";
function ComprarModal() {
  const [pay, setPay] = useState(null);
  const [datos, setDatos] = useState({})
  const [cliente, setCliente] = useState({nombre: "", telefono: "",});
  const hours = ["12hs", "13hs", "14hs", "19hs", "20hs", "21hs"];
  const [hour, setHour] = useState("19hs"); 
  const { totalCart, listCart } = useCart();
  const telefono = "5492262339779"; // sin + ni espacios
  const listadoProductos = listCart.join("\n");


  console.log(cliente)
  
  const handleWhatsAppClick = () => {
    if (!validarDatos(cliente,datos,pay)) return;
    const mensaje=generarMensajePedido(cliente,datos,pay, hour, totalCart,listadoProductos)
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };
  const handleChange = (e) => {
    setCliente((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

// 1. Eliminamos el useState y el useEffect.
// 2. Calculamos 'envio' en tiempo de renderizado de forma eficiente:
const envio = useMemo(() => {
  const { latitude, longitude } = datos || {};
  
  // Si no hay coordenadas, devolvemos el estado por defecto
  if (!latitude || !longitude) {
    return { nombre: "Calculando...", costo: 0 };
  }

  // De lo contrario, calculamos y devolvemos el resultado de inmediato
  return calcularEnvio(latitude, longitude);

// El cálculo solo se ejecutará si cambian la latitud o la longitud
}, [datos]);

  return (
    <div className="div-modalCompra">
      <h3>
        <span><ShopIcon/></span>Datos de entrega
      </h3>
      <div className="div-input">
        <label>Nombre y apellido</label>
        <div className="input">
          <span><PencilIcon/></span>
           <input type="text"
            name="nombre"
            value={cliente.nombre}
            onChange={handleChange}
            placeholder="Ej: Juan Perez" />
        </div>
      </div>
      <div className="div-input">
        <label>Telefono</label>
        <div className="input">
          <span><PhoneIcon/></span>
           <input type="text"
            name="telefono"
            value={cliente.telefono}
            onChange={handleChange}
           placeholder="Ej: 2262 123456"/>
        </div>
      </div>
      <ButtonPay pay={pay} setPay={setPay} />
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

      <AddressMap setDatos={setDatos} />
     <section className="relativeClass">
      <div className="total">
        <hr />
        <article>
          <p>
            <span>Subtotal</span>
            <span>${totalCart}</span>
          </p>
          <p>
            <span>Envio</span>
            <span className={envio.costo==0?"green":""}>{envio.costo==0?"Gratis":"$"+envio.costo}</span>
          </p>
        </article>

        <hr />
        <p className="total-p">
          <span>TOTAL</span>
          <span>${totalCart+envio.costo}</span>
        </p>
        <ButtonIcon clase="btnAddCart btnMargin" nombre="CONFIRMAR PEDIDO" onclick={()=>handleWhatsAppClick()} icon={<CheckIcon />} />
      </div>
     </section>

    </div>
  );
}

export default ComprarModal;
