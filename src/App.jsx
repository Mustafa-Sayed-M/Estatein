import { Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PropertiesPage from "./Pages/PropertiesPage";
import PropertyDetailsPage from "./Pages/PropertyDetailsPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
// Components
import Topbar from "./Components/Topbar/Topbar";
import Nav from './Components/Nav/Nav';
import ExploreSection from "./Components/Sections/ExploreSection/ExploreSection";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-grey-8 text-white">
      {/* Topbar */}
      <Topbar />
      {/* Nav */}
      <Nav />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/:propertyId" element={<PropertyDetailsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Explore Section ( as a global component ) */}
      <ExploreSection />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;