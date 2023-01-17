import s from "./style.module.scss";
import { rentalList } from "../../datas/locations";
import { useParams } from "react-router-dom";
import { useState } from "react";
import vectorLeft from "../../assets/img/Vector-left.png";
import vectorRight from "../../assets/img/Vector-right.png";
function Carrousel({ pictures }) {
  const { id } = useParams();
  const singleLogement = rentalList.find((obj) => obj.id === id);

  const [current, setCurrent] = useState(0);
  const length = singleLogement.pictures.length;

  const previousPicture = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextPicture = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className={s.container}>
      {singleLogement.pictures.map((id) => (
        <img
          className={s.photoLogement}
          src={singleLogement.pictures[current]}
          alt="logement"
          key={id}
        />
      ))}
      {length === 1 ? (
        ""
      ) : (
        <>
          <img
            className={s.arrowLeft}
            src={vectorLeft}
            alt="flèche gauche"
            onClick={previousPicture}
          />
          <img
            className={s.arrowRight}
            src={vectorRight}
            alt="flèche droite"
            onClick={nextPicture}
          />
          <div className={s.counter}>
            {current +1} / {length}
          </div>
        </>
      )}
    </div>
  );
}

export default Carrousel;
