import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import TopIntroSlider from "./components/TopIntroSlider";
import Hero from "./components/Hero";
import Services from "./components/services";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Clients from "./components/Clients";
import StatsStrip from "./components/StatsStrip";
import Testimonials from "./components/Testimonials";
import Feedback from "./components/Feedback";




import "./styles.css";

const App: React.FC = () => {
  return (
    <div>
      <TopBar />
      <Header />

      {/* All main sections share the same background */}
      <div className="main-content">
        <TopIntroSlider />
        <Hero />
         {/* ✅ New stats strip */}
      <StatsStrip
        stats={[
          { value: "40+", label: "Projects Delivered" },
          { value: "20+", label: "Happy Clients" },
          { value: "5+", label: "Countries Served" },
          { value: "4.9★", label: "Client Rating" },
        ]}
      />
        <Services />
        <AboutUs />
        <Portfolio />
        <Clients />
          {/* ✅ New testimonials section */}
      <Testimonials
        testimonials={[
          {
            quote:
              "VertixSoft helped us launch our mobile app on time with great quality. Communication was smooth throughout the project.",
            name: "Aravind B",
            role: "Product Manager",
            company: "Organic Farms",
          },
          {
            quote:
              "They understood our requirements clearly and delivered a clean, modern web platform that our customers love.",
            name: "Vamshi G",
            role: "Founder",
            company: "Fresh vegies",
          },
          {
            quote:
              "Professional team with strong technical skills. The support after delivery has also been excellent.",
            name: "Ram",
            role: "CEO",
            company: "Veeresh Solutions",
          },
        ]}
      />
           
      </div>


      {/* Contact section has its own background */}
      <Contact />
      <Feedback />
      

      <Footer />
      <Chatbot />


    </div>
  );
};

export default App;
