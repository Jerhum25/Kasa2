import Card from "../Card/Card";
import s from "./style.module.scss";
import { rentalList } from "../../datas/locations";

function Cards() {
  return (
    <div className={s.container}>
      {rentalList.map(({id, title, cover}) => (
        <Card key={id} cover={cover} title={title} id={id} />
      ))}
    </div>
  );
}

export default Cards;
