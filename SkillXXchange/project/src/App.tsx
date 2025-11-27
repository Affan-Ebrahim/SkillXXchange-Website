import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ShareSkill from './pages/ShareSkill';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Messages from './pages/Messages';
import LearnMore from './pages/LearnMore';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/share-skill" element={<ShareSkill />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/learn-more" element={<LearnMore />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
