import s from "./style.module.scss";
import { useState } from "react";
import vectorDown from "../../assets/img/Vector-down.png";
import vectorUp from "../../assets/img/Vector-up.png";

function Collapse({ titre, description }) {
  const [open, setOpen] = useState(false);
  const toggleCollapse = () => setOpen(!open);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <div>{titre}</div>

        <img
          src={!open ? vectorDown : vectorUp}
          alt={!open ? "flèche bas" : "flèche haut"}
          onClick={toggleCollapse}
        />
      </div>
      {open && <div className={s.description}>{description}</div>}
    </div>
  );
}

export default Collapse;
