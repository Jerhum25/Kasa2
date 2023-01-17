import s from "./style.module.scss";
import { useParams } from "react-router-dom";
import { rentalList } from "../../datas/locations";

function TagsLocation(props) {
  const { id } = useParams();
  const singleLogement = rentalList.find((obj) => obj.id === id);

  return <div className={s.container}>
    {singleLogement.tags.map((tag, index) =>{
        return <div className={s.tag}key={index}>{tag}</div>
    })}
  </div>;
}

export default TagsLocation;
