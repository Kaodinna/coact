import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages";
import About from "./pages/about";
import Opportunities from "./pages/opportunities";
import ExploreStartups from "./pages/exploreStartups";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/explore-startups" element={<ExploreStartups />} />
    </Routes>
  );
}

export default App;
