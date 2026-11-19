import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import About from "../Component/About";
import PopularDishes from "../Component/PopularDishes";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <PopularDishes />
    </div>
  );
}

export default Home;
