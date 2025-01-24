import Footer from "./components/Footer/Footer";
import Hero from "./components/Home/Hero";
import Testimonials from "./components/Home/Testimonials";
import InstagramFeed from "./components/Home/InstagramFeed";
import Contact from "./components/Home/Contact";
import Header from "./components/Header/Header";
import { LinearGradient } from "./components/UI/LinearGradient";
import DirectionWrapper from "./components/DirectionWrapper/DirectionWrapper";

export default function Home() {
  return (
    <DirectionWrapper>
      <LinearGradient />
      <Header />
      <main className="">
        <Hero />
        <Testimonials />
        <InstagramFeed />
        <Contact
          phoneNumber="123-456-7890"
          messageTemplate="Hello! I'm interested in your services. Please contact me."
        />
      </main>
      <Footer />
    </DirectionWrapper>
  );
}
