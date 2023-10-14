import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import pages
import { Home, Auth, PageNotFound } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
