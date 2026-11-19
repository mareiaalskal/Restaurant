import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000"
          alt="Restaurant Interior"
        />
      </div>

      <div className="about-content">
        <p className="about-subtitle">OUR STORY</p>

        <h2>
          A Taste of Italy,
          <span> A Touch of Love</span>
        </h2>

        <p className="about-description">
          At La Tavola, we believe that food brings people together. Inspired by
          the heart of Italy, our restaurant was created to share authentic
          flavors, fresh ingredients, and warm hospitality.
        </p>

        <p className="about-description">
          Every dish tells a story, prepared with passion and care to make every
          visit a memorable experience.
        </p>

        <button className="about-btn">Discover More</button>
      </div>
    </section>
  );
}

export default About;
