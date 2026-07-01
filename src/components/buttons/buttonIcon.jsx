import "./buttonIcon.css";
const ButtonIcon = ({ clase, nombre, onclick, icon }) => {
  return (
    <button className={clase} onClick={onclick}>
      {icon}
      {nombre}
    </button>
  );
};

export default ButtonIcon;
