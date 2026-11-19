import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">AUTHENTIC ITALIAN CUISINE</p>

        <h1>
          Welcome to <span>La Tavola</span>
        </h1>

        <p className="hero-description">
          Experience the authentic taste of Italy, where every meal is made with
          love.
        </p>

        <Link to="/menu" className="hero-btn">
          View Our Menu
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1000"
          alt="Italian Pasta"
        />
      </div>
    </section>
  );
}

export default Hero;
