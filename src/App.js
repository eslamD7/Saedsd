import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddVolunteer from "./AddVolunteer";
import AddCase from "./AddCase";
import Warning from "./Warning";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "@chakra-ui/react";
import GivingCase from "./GivingCase";
import NeededCase from "./NeededCase";
import Volunteer from "./Volunteer";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <BrowserRouter>
      <VStack>
        <div className="container">
          <div className="Upbar">
            <div className="ToggleButtonDiv">
              <IconButton
                icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                isRound="true"
                size="lg"
                alignSelf="flex-end"
                onClick={toggleColorMode}
                className="ToggleButton"
              />
            </div>
            <Link className="contactLink" href="/">
              <p className="contactLink">للتوصل: info@saedsa.com</p>
            </Link>
            <Link className="HomePageLink" href="/">
              <h4 className="HomePageLinkH4">الصفحة الرئيسية</h4>
            </Link>
          </div>

          <Header />

          <Warning />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddVolunteer" element={<AddVolunteer />} />
            <Route path="/AddCase" element={<AddCase />} />
            <Route path="/EditVolunteer/:id" element={<AddVolunteer />} />
            <Route path="/EditCase/:id" element={<AddCase />} />
            <Route path="/Volunteer" element={<Volunteer />} />
            <Route path="/NeededCase/" element={<NeededCase />} />
            <Route path="/GivingCase/" element={<GivingCase />} />
          </Routes>
          <Footer />
        </div>
      </VStack>
    </BrowserRouter>
  );
}

export default App;
