import "./App.css";
import SvgStar from "./components/Svgstar";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Method from "./components/Method";
// import Quot from "./components/Quot";
// import LogoRow from "./components/LogoRow";
import Footer from "./components/Footer";
import DownloadPart from "./components/DownloadPart";
import OurValue from "./components/OueValue";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      <Header />
      <Slogan />
      <OurValue />
      <Method />
      <DownloadPart />
      <SvgStar isMobile={isMobile} />
      {/* <Quot isMobile={isMobile} />
      <LogoRow /> */}
      <Footer />
    </>
  );
}

export default App;
