import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages";
import About from "./pages/about";
import Opportunities from "./pages/opportunities";
import ExploreStartups from "./pages/exploreStartups";
import Venture from "./pages/venture";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/venture" element={<Venture />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/explore-startups" element={<ExploreStartups />} />
    </Routes>
  );
}

export default App;
