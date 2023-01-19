import { ClientHomePage } from "./screens/ClientHomePage";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LandingPage } from './screens/LandingPage'
import {ResetPassword} from './screens/ResetPassword'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {LoginPage} from './screens/LoginPage.js'
function App() {
  return (
 
    <Router>
      <Header />
      <Routes>
        <Route exact path="/client" element={< ClientHomePage />} />
      </Routes>

      <Routes>
        <Route exact path="/resetPassword" element={< ResetPassword />} />
      </Routes>

      <Routes>
        <Route exact path="/clientLogin" element={< LoginPage />} />
      </Routes>

      <Routes>
        <Route exact path="/companyLogin" element={< LoginPage />} />
      </Routes>

      <Routes>
        <Route exact path='/' element={<LandingPage />} />
      </Routes>

      <Footer/>

    </Router>

  )
}

export default App;
