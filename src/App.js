import "./App.css";
import SvgStar from "./components/Svgstar";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Method from "./components/Method";
import Quot from "./components/Quot";
import LogoRow from "./components/LogoRow";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      <Header />
      <Slogan />
      <Method />
      <SvgStar isMobile={isMobile} />
      <Quot isMobile={isMobile} />
      <LogoRow />
      <Footer />
    </>
  );
}

export default App;
