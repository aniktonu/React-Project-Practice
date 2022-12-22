import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homepage/HomePage';
import About from './components/about/About';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';






function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </Router>
  )
}

export default App;

