import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import AboutUs from './screens/About';
import Services from './screens/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;