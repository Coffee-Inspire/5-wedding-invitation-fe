import "bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Screen from "./screens";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/invitation" element={<Screen />} exact />
        <Route path="/risalfriend" element={<Screen />} exact />
        <Route path="/gabycolleague" element={<Screen />} exact />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
