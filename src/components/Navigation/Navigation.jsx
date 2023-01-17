import { useNavigate } from "react-router-dom";
import s from "./style.module.scss";

function Navigation({logoSrc}) {
  const navigate = useNavigate()
  function clickAccueil(){
    navigate("/")
  }
  function clickAPropos(){
    navigate("/aPropos")
  }
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <img src={logoSrc} alt="logo"></img>
      </div>
      <ul>
        <li onClick={clickAccueil}>Accueil</li>
        <li onClick={clickAPropos}>A Propos</li>
      </ul>
    </div>
  );
}

export default Navigation;
