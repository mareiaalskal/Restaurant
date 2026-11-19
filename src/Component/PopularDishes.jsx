import { useState } from "react";
import { Link } from "react-router-dom";
import "./PopularDishes.css";

function PopularDishes() {
  const dishes = [
    {
      name: "Italian Pasta",
      description: "Fresh pasta with creamy Italian sauce.",
      price: "$18",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
    },
    {
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella.",
      price: "$15",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600",
    },
    {
      name: "Grilled Steak",
      description: "Tender steak with herbs and spices.",
      price: "$25",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600",
    },
    {
      name: "Italian Salad",
      description: "Fresh vegetables with Italian dressing.",
      price: "$12",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    },
    {
      name: "Lasagna",
      description: "Traditional Italian baked pasta.",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextDish = () => {
    setCurrent((prev) => (prev + 1) % dishes.length);
  };

  const prevDish = () => {
    setCurrent((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  return (
    <section className="popular-dishes">
      <div className="dishes-header">
        <p className="dishes-subtitle">OUR SPECIALTIES</p>
        <h2>Our Popular Dishes</h2>
        <p>Discover the flavors everyone loves.</p>
      </div>

      <div className="dishes-container">
        <button className="arrow-btn" onClick={prevDish}>
          &#10094;
        </button>

        <div className="dish-card">
          <img src={dishes[current].image} alt={dishes[current].name} />

          <div className="dish-info">
            <h3>{dishes[current].name}</h3>
            <p>{dishes[current].description}</p>
            <span className="dish-price">{dishes[current].price}</span>
          </div>
        </div>

        <button className="arrow-btn" onClick={nextDish}>
          &#10095;
        </button>
      </div>

      <div className="dishes-dots">
        {dishes.map((dish, index) => (
          <span
            key={dish.name}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <Link to="/menu" className="view-menu-btn">
        View Menu
      </Link>
    </section>
  );
}

export default PopularDishes;
