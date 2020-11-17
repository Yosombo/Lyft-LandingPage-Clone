import css from "./App.module.css";
import ClearGap from "./component/ClearGap/ClearGap";
import HowWorks from "./component/HowWorks/HowWorks";
import LargeHero from "./component/LargeHero/LargeHero";
import LearnMore from "./component/LearnMore/LearnMore";
import LyftInro from "./component/LyftInro/LyftInro";
import MoreInfo from "./component/MoreInfo/MoreInfo";
import RentalPromo from "./component/RentalPromo/RentalPromo";
function App() {
  return (
    <div className={css.App}>
    <LargeHero/>
    <LearnMore/>
    <RentalPromo/>
    <LyftInro/>
    <HowWorks/>
    <ClearGap/>
    <MoreInfo/>
    </div>
  );
}

export default App;
