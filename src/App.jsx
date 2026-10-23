import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/colorTheme.css";
import Footer from "../pages/Footer";
import Services from "../pages/Services";
import FAQ from "../pages/FAQ";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Careers from "../pages/Careers";
import ContactUs from "../pages/ContactUs";
import OurTeam from "../pages/OurTeam";
import Navbar from "../pages/Navbar";
import ServiceDetails from "../pages/ServiceDetails";
import ApplyNow from "../pages/ApplyNow";
import Projects from "../pages/Projects";
import ScrollToTop from "../pages/ScrollToTop";
import CapabilityDetail from "../pages/CapabilityDetail";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndCondition";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/servicedetails/:id" element={<ServiceDetails />} />
          <Route path="/applynow" element={<ApplyNow />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/capabilities/:id" element={<CapabilityDetail />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
