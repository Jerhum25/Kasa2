import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";

function ErrorPage(props) {
  const navigate = useNavigate();
  function clickAccueil() {
    navigate("/");
  }
  return (
    <div className={s.container}>
      <h2>404</h2>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <p onClick={clickAccueil}>Retourner sur la page d'accueil</p>
    </div>
  );
}

export default ErrorPage;
