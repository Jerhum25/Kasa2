import s from "./style.module.scss";
import Collapse from "../../components/Collapse/Collapse";
import { aProposData } from "../../datas/aPropos";
import Banner from "../../components/Banner/Banner";
import BannerImg from "../../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
function APropos(props) {
  return (
    <div className={s.container}>
      <Banner src={BannerImg} />
      {aProposData.map(({ title, description, index }) => (
        <Collapse style={{color: "red"}} titre={title} description={description} key={index + title} />
      ))}
    </div>
  );
}

export default APropos;
