import Banner from "../../components/Banner/Banner";
import bannerBackground from '../../assets/img/banner_background.png'
import Cards from "../../components/Cards/Cards";

function Accueil(props) {
  return (
    <div>
      <Banner src={bannerBackground} title="Chez vous, partout et ailleurs" />
      <Cards />
    </div>
  );
}

export default Accueil;
