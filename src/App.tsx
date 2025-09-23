import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./styles/utilities.css";
import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
function App() {
  return (
    <>
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
      </main>
    </>
  );
}

export default App;
