import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Form from './pages/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}
export default App
