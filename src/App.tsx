import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import FAQ from "@/pages/FAQ";
import NotFound from "@/pages/NotFound";
import BathResurfacing from "@/pages/services/BathResurfacing";
import CrackedSinkRepair from "@/pages/services/CrackedSinkRepair";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services/bath-resurfacing" element={<BathResurfacing />} />
        <Route path="/services/cracked-sink-repair" element={<CrackedSinkRepair />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
