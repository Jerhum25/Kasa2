import s from "./style.module.scss";
import { useParams } from "react-router-dom";
import React from "react";
import { rentalList } from "../../datas/locations";
function TitreLocation() {
  const { id } = useParams();
  const singleLogement = rentalList.find((obj) => obj.id === id);

  return (
    <div className={s.container}>
      <div className={s.title}>{singleLogement.title}</div>
      <div className={s.subtitle}>{singleLogement.location}</div>
    </div>
  );
}

export default TitreLocation;
