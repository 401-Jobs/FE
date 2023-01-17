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
        <Route exact path="/client" element={< ClientHomePage />} />
      </Routes>

      <Routes>
        <Route exact path='/' element={<LandingPage />} />
      </Routes>

      <Footer/>

    </Router>

  )
}

export default App;
