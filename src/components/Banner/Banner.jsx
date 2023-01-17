import s from "./style.module.scss";

function Banner({src, title}) {
    return (
            <div className={s.container}>
                <div className={s.shadow}></div>
                <h2>{title}</h2>
                <img src={src} alt="Banner" />
            </div>
    );
}

export default Banner;