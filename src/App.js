import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Screen from "./screens";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/invitation" element={<Screen />} />
        <Route path="/risalfriend" element={<Screen />} />
        <Route path="/gabycolleague" element={<Screen />} />
      </Routes>
    </Router>
  );
}

export default App;
