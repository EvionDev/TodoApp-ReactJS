import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import pages
import { Home } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
