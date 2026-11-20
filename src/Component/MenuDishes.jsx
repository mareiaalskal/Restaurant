import { useCart } from "../Context/CartContext";
import "./MenuDishes.css";

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    description: "Fresh tomatoes, mozzarella cheese and basil.",
    price: 12,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    description: "Classic pizza topped with pepperoni and cheese.",
    price: 15,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
  },
  {
    id: 3,
    name: "Classic Burger",
    category: "Burger",
    description: "Juicy beef, fresh lettuce and special sauce.",
    price: 10,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
  },
  {
    id: 4,
    name: "Cheese Burger",
    category: "Burger",
    description: "Grilled beef with melted cheddar cheese.",
    price: 13,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
  },
  {
    id: 5,
    name: "Creamy Pasta",
    category: "Pasta",
    description: "Creamy sauce with parmesan cheese.",
    price: 14,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600",
  },
  {
    id: 6,
    name: "Spaghetti",
    category: "Pasta",
    description: "Italian spaghetti with fresh tomato sauce.",
    price: 11,
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=600",
  },
];

function MenuDishes() {
  const { addToCart } = useCart();

  return (
    <section className="menu-dishes">
      <div className="menu-dishes-grid">
        {dishes.map((dish) => (
          <div className="menu-dish-card" key={dish.id}>
            <img src={dish.image} alt={dish.name} />

            <div className="menu-dish-info">
              <span className="menu-dish-category">{dish.category}</span>

              <h3>{dish.name}</h3>
              <p>{dish.description}</p>

              <div className="menu-dish-footer">
                <span className="menu-dish-price">${dish.price}</span>

                <button onClick={() => addToCart(dish)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuDishes;
