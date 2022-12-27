import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/homepage/HomePage';
import About from './components/about/About';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import DishDetail from './components/about/DishDetail';







function App() {

  const { id } = useParams();





  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<DishDetail />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router >
  )
}

export default App;

