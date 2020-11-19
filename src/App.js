import { Switch, Route, Link} from 'react-router-dom'
import css from "./App.module.css";
import ClearGap from "./component/ClearGap/ClearGap";
import HowWorks from "./component/HowWorks/HowWorks";
import LargeHero from "./component/LargeHero/LargeHero";
import LearnMore from "./component/LearnMore/LearnMore";
import Login from "./component/Login/Login";
import LyftInro from "./component/LyftInro/LyftInro";
import MoreInfo from "./component/MoreInfo/MoreInfo";
import Questions from "./component/Questions/Questions";
import RentalPromo from "./component/RentalPromo/RentalPromo";
import ShowcaseOnly from './component/ShowcaseOnly/ShowcaseOnly';
function App() {
  return (
    <div className={css.App}>

      <Switch>

        <Route path="/showcase" component={ShowcaseOnly} />
        <Route path="/login" component={Login} />

        <Route exact path="/">
          <LargeHero/>
          <LearnMore/>
          <RentalPromo/>
          <LyftInro/>
          <HowWorks/>
          <ClearGap/>
          <MoreInfo/>
          <Questions/>
          <div className={css.Footer} >
          <Link to="/showcase"><p>Privacy</p></Link>
          </div>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
