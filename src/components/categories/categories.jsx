import "./categories.css";
import combos from "../../assets/combo.png";
import burguer from "../../assets/iconoburguer.png";
import chori from "../../assets/chori.png";
import vaca from "../../assets/vaca.png";
import pollo from "../../assets/gallina.png";
function Categories() {
  return (
    <div className="categories">

      <a href="#cortes-vacunos">
        <img src={vaca} alt="" />
        <p>Cortes Vacunos</p>
      </a>

      <a href="#aves">
        <img src={pollo} alt="" />
        <p className="selected">Aves</p>
      </a>

      <a href="#elaborados-crudos" >
        <img src={burguer} alt="" />
        <p >Hamburguesas</p>
      </a>

      <a href="#achuras">
        <img src={combos} alt="" />
        <p>Combos</p>
      </a>

      <a href="#salchichas">
         <img src={chori} alt="" />
        <p>Chorizos</p>
      </a>

    </div>
  );
}

export default Categories;