
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import UserDetails from './Components/UserDetails/UserDetails';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app-component">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
