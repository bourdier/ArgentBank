import './index.css'
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
