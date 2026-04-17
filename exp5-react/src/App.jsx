import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";

import "./App.css";

function App() {
  return (
    <div>

      <nav className="navbar">
        <div className="logo">ReactLab</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/analytics">Analytics</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>

    </div>
  );
}

export default App;