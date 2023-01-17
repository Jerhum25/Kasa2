import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import logo from "./assets/img/LOGO.png";
import logoFooter from "./assets/img/logo_footer.png";
import s from "./style.module.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={s.container}>
      <Navigation logoSrc={logo} />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer logoSrc={logoFooter} />
    </div>
  );
}
export default App;
