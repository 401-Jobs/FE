import { ClientHomePage } from "./screens/ClientHomePage";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LandingPage } from './screens/LandingPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route exact path="/" element={< ClientHomePage />} />
      </Routes>

        <Route exact path='/' element=<LandingPage /> />
      </Routes>
      <Footer/>


      {/* <Routes>
          <Route path="/canddidate/:id" element={<CompareScreen />} />
        </Routes> */}

      {/* <Footer /> */}
    </Router>
  )
}

export default App
