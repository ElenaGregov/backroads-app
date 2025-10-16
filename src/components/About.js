import aboutImg from "../images/about.jpeg";
import Title from "./Title";
function About() {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <Title title="about" subTitle="us" />
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            At Backroads Travel Tours, we believe every journey should be
            unforgettable. From hidden gems to iconic destinations, we curate
            experiences that immerse you in the culture, nature, and adventure
            of each place.
          </p>
          <p>
            Our expert guides and thoughtfully planned itineraries ensure
            comfort, excitement, and memories that last a lifetime. Whether it’s
            trekking in the mountains, discovering bustling cities, or relaxing
            on pristine beaches, we bring your travel dreams to life.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default About;
