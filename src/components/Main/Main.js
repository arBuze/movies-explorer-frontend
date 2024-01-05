import './Main.css';
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

export default function Main({ width }) {
  return(
    <>
      <Promo />
      <AboutProject />
      <Techs width={width} />
      <AboutMe />
    </>
  );
}
