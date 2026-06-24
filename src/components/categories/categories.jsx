import "./categories.css";
import combos from "../../assets/combo.png";
import burguer from "../../assets/iconoburguer.png";
import chori from "../../assets/chori.png";
import vaca from "../../assets/vaca.png";
import pollo from "../../assets/gallina.png";
import milas from "../../assets/milanesas.png";
import { useEffect, useState } from "react";

function Categories() {
  const [hidden, setHidden] = useState(false);
  const [selected, setSelected] = useState("milanesas");
  const categories = [
  { id: "milanesas", name: "Milanesas", image: milas },
  { id: "hamburguesas", name: "Hamburguesas", image: burguer },
  { id: "pollo", name: "Aves", image: pollo },
  { id: "carne", name: "Carne Vacuna", image: vaca },
  { id: "chorizos", name: "Chorizos", image: chori },
  { id: "combos", name: "Combos", image: combos },
];
  useEffect(() => {
    const trigger = document.querySelector(".categories-trigger");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (trigger) {
      observer.observe(trigger);
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll(".div-category-span");
    console.log(sections)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "10px 0px -60% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);

    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="categories-trigger" />

      <div className={`categories ${hidden ? "hidden" : ""}`}>
        {categories.map((category) => (
        <a
          key={category.id}
          href={`#${category.id}`}
          onClick={() => setSelected(category.id)}
        >
          <img src={category.image} alt="" />

          <p className={selected === category.id ? "selected" : ""}>
            {category.name}
          </p>
        </a>
      ))}
      </div>
    </>
  );
}

export default Categories;