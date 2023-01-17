import s from "./style.module.scss";
import { useParams } from "react-router-dom";
import { rentalList } from "../../datas/locations";

function ProfileLocation(props) {
  const { id } = useParams();
  const singleLogement = rentalList.find((obj) => obj.id === id);

  return (
    <div className={s.container}>
      <div>{singleLogement.host.name}</div>
      <img src={singleLogement.host.picture} alt="photo profil" />
    </div>
  );
}

export default ProfileLocation;
