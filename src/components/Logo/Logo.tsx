import LogoSVG from "@/public/logo.svg";
import style from "./Logo.module.scss";

export const Logo = () => (
  <div className={style.logo}>
    <img src={LogoSVG} alt="Logo" />
  </div>
);
