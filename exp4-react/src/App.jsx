import Analytics from "./pages/Analytics";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/analytics" element={<Analytics />} />
</Routes>
  );
}

export default App;