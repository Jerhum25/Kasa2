import s from "./style.module.scss";

function Footer({ logoSrc }) {
  return (
    <div className={s.container}>
      <img src={logoSrc} alt="logo" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
