import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./features/home/LandingPage";
import AboutPage from "./features/home/AboutPage";
import DiscoverForm from "./features/onboarding/DiscoverForm";
import DomainPage from "./features/domain/DomainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/discover" element={<DiscoverForm />} />
          <Route path="/domain/:domainKey" element={<DomainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;