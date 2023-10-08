import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import pages
import { Home, Auth } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
