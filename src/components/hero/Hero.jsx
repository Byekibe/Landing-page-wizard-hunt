import arrowIcon from "../../assets/Icon.png";

export default function Hero() {
  return (
    <section className="hero-section mt-24">
      <h1 className="">Your Magic Wand for Instant Documentation</h1>
      <h3 className="uppercase text-16 mb-2">
        Turn ANY process into a simple step-by step Guide
      </h3>
      <button className="hero-btn flex items-center">
        <span className="pr-2">Install Wizardshot</span>
        <img src={arrowIcon} alt="" />
      </button>
    </section>
  );
}
