import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/work" element={<OurWork />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
