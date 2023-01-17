import s from "./style.module.scss";
import { useParams } from "react-router-dom";
import { rentalList } from "../../datas/locations";
import greyStar from "../../assets/img/grey-star.png";
import redStar from "../../assets/img/red-star.png";

function RatingLocation(props) {
  const { id } = useParams();
  const singleLogement = rentalList.find((obj) => obj.id === id);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={s.container}>
      {stars.map((star) =>
        singleLogement.rating >= star ? (
          <img src={redStar} alt="étoile rouge" key={star.toString()}/>
        ) : (
          <img src={greyStar} alt="étoile grise" key={star.toString()}/>
        )
      )}
    </div>
  );
}

export default RatingLocation;
