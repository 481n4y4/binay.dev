import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import ProjectDetail from "./component/ProjectDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
