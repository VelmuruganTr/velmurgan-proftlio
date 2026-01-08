import Navbar from "./layout/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import LivePrices from "./components/LivePrices";
import Footer from "./layout/Footer";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Project from "./components/Project";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Profile/>
      <Education/>
      <Certification/>
      <Project/>
      <LivePrices />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
