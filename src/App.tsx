import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./styles/utilities.css";
import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import AppServices from "./components/services";
import AppWorks from "./components/works";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import AppFooter from "./components/footer";
function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <Testimonials />
        <Contact />
        <AppFooter />
      </main>
    </div>
  );
}

export default App;
