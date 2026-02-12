import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Branches from "./pages/Branches";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Franchise from "./pages/Franchise";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="branches" element={<Branches />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="events" element={<Events />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="under-construction" element={<UnderConstruction />} />
          {/* Catch-all route for all other undefined pages */}
          <Route path="*" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
