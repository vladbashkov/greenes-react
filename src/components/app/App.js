import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavMenu from "../NavMenu/NavMenu";
import HeroSection from "../HeroSection/HeroSection";
import FooterSection from "../FooterSection/FooterSection";
import MainPage from "../pages/MainPage";
import BaseProductOils from "../pages/BaseProductOils";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <NavMenu />
        </header>
        <main>
          <HeroSection />
          <Routes>
            <Route path="/" element={ <MainPage/> } />
            <Route path="/base-oil-products" element={ <BaseProductOils /> } />
          </Routes>
        </main>
        <footer>
          <FooterSection />
        </footer>
      </div>
    </Router>
  );
}

export default App;
