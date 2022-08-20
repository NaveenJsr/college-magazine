import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NewsAndEvent from "./pages/NewsAndEvent";
import CollegeTrends from "./pages/CollegeTrends";
import Sports from "./pages/Sports";
import ArtsAndPainting from "./pages/ArtsAndPainting";
import Photography from "./pages/Photography";
import ScienceAndTech from "./pages/ScienceAndTech";
import Poems from "./pages/Poems";
import Articles from "./pages/Articles";
import Nanotales from "./pages/Nanotales";
import Stories from "./pages/Stories";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";



function App() {
  return (
    <>
      <Header />
    
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/NewsAndEvent" element={<NewsAndEvent />} />
            <Route path="/Trends" element={<CollegeTrends />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/clubs/ArtsAndPaintings" element={<ArtsAndPainting />} />
            <Route path="/clubs/Photography" element={<Photography />} />
            <Route path="/clubs/ScienceAndTech" element={<ScienceAndTech />} />
            <Route path="/Writings/Poems" element={<Poems />} />
            <Route path="/Writings/Articles" element={<Articles />} />
            <Route path="/Writings/Nanotales" element={<Nanotales />} />
            <Route path="/Writings/Stories" element={<Stories />} />
            <Route path="/AboutUs" element={<AboutUs />} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
}

export default App;