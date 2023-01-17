import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";

function Card({ cover, title, id }) {
  const navigate = useNavigate();

  function onClickCard() {
    navigate(`/ficheLogement/${id}`);
  }

  return (
    <div onClick={onClickCard} key={id} className={s.container}>
      <div className={s.shadow}></div>
      <h3>{title}</h3>
      <img src={cover} alt={title} />
    </div>
  );
}

export default Card;
