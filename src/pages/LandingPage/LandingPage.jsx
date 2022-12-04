import NavbarUs from '../../components/landingpageComponents/NavbarUs';
import HeroSection from '../../components/landingpageComponents/HeroSection';
import SectionBMI from '../../components/landingpageComponents/SectionBMI';
import AboutUs from '../../components/landingpageComponents/AboutUs';
import Ourteams from '../../components/landingpageComponents/Ourteams';
import Contact from '../../components/landingpageComponents/Contact';
import Footer from '../../components/landingpageComponents/Footer';

function LandingPage() {
  return (
    <div>
      <NavbarUs />
      <HeroSection />
      <SectionBMI />
      <AboutUs />
      <Ourteams />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
