import './index.css'
import { Routes, Route } from "react-router-dom"
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
