import css from "./App.module.css";
import ClearGap from "./component/ClearGap/ClearGap";
import HowWorks from "./component/HowWorks/HowWorks";
import LargeHero from "./component/LargeHero/LargeHero";
import LearnMore from "./component/LearnMore/LearnMore";
import LyftInro from "./component/LyftInro/LyftInro";
import MoreInfo from "./component/MoreInfo/MoreInfo";
import Questions from "./component/Questions/Questions";
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
    <Questions/>
    <div className={css.Footer} >
    <a href="/">Privacy</a>
    </div>
    </div>
  );
}

export default App;
