import { useParams } from "react-router-dom";
import { rentalList } from "../../datas/locations";
import Collapse from "../Collapse/Collapse";
import s from "./style.module.scss";

function Details() {

    const { id } = useParams();
    const singleLogement = rentalList.find((obj) => obj.id === id);

  return (
    <div className={s.container}>
      <Collapse titre="Description" description={singleLogement.description} />
      <Collapse
        titre="Equipements"
        description={
          <ul>
            {singleLogement.equipments.map((equipment, index) => {
              return <li key={index}>{equipment}</li>;
            })}
          </ul>
        }
      />
    </div>
  );
}

export default Details;
