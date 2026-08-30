import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { MobileBottomBar } from "./components/common/MobileBottomBar";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { DentistsPage } from "./pages/DentistsPage";
import { DentistDetailPage } from "./pages/DentistDetailPage";
import { BeforeAfterPage } from "./pages/BeforeAfterPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { AppointmentPage } from "./pages/AppointmentPage";
import { ContactPage } from "./pages/ContactPage";
import { FAQPage } from "./pages/FAQPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Global Styles
import "./styles/global.css";
import "./styles/components.css";
import "./styles/pages.css";

export function App() {
  return (
    <Router>
      <div
        className="app-layout"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/dentists" element={<DentistsPage />} />
            <Route path="/dentists/:slug" element={<DentistDetailPage />} />
            <Route path="/before-after" element={<BeforeAfterPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </Router>
  );
}

export default App;
