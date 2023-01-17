import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { ClientHomePage } from "./screens/ClientHomePage";
function App() {
  return (
    <Router>
      {/* <Header /> */}

      <Routes>
        <Route exact path="/" element={< ClientHomePage />} />
      </Routes>
      {/* <Routes>
        <Route exact path="/" element={< LandingPage />} />
      </Routes> */}

      {/* <Routes>
          <Route path="/canddidate/:id" element={<CompareScreen />} />
        </Routes> */}

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
