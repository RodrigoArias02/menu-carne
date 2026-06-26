import "./categories.css";
import { categories } from "../../utils/products.js";
import { useEffect, useState, useRef } from "react";

function Categories() {
  const [hidden, setHidden] = useState(false);
  const [selected, setSelected] = useState("milanesas");

  const categoriesRef = useRef(null);
  const triggerRef = useRef(null);

  // Mostrar/Ocultar barra fija
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Detectar la categoría visible
  useEffect(() => {
    const sections = document.querySelectorAll(".div-category-span");

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

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Centrar la categoría seleccionada
  useEffect(() => {
    categoriesRef.current
      ?.querySelector(`[data-category="${selected}"]`)
      ?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
  }, [selected]);

  return (
    <>
      <div ref={triggerRef} className="categories-trigger" />

      <div
        ref={categoriesRef}
        className={`categories ${hidden ? "hidden" : ""}`}
      >
        {categories.map((category) => (
          <a
            key={category.id}
            data-category={category.id}
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