import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import VideoSection from "../../components/videoSection/VideoSection";
import About from "../../components/about/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <About />
    </>
  );
}
