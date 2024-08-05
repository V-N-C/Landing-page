import "./App.css";
import Titleheading from "./TitleSignup";
import LeadSection from "./LeadSection";
import FeaturesImg from "./FeaturesInRow";
import Features2 from "./FeaturesInColumn";
import Testimonials from "./Testimonial";
import GettingStarted from "./GettingStarted";
import Footercopyright from "./FooterCopyright";

function App() {
  return (
    <>
      <header>
        <section>
          {/* Navbar section and Footer section components reused */}
          <Titleheading />
          {/* Carousel section and Email signin section components reused */}
          <LeadSection />
          {/* Svg images section */}
          <FeaturesImg />
          {/* Main Images section */}
          <Features2 />
        </section>
        {/* Testimonials section */}
        <Testimonials />
      </header>
      {/* Getting Started Email signin section */}
      <GettingStarted />
      <footer>
        {/* Footer section */}
        <Footercopyright />
      </footer>
    </>
  );
}

export default App;