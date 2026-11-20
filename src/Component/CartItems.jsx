import { useCart } from "../Context/CartContext";

function CartItems() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>You haven't added any dishes yet.</p>
      </div>
    );
  }

  return (
    <section className="cart-items">
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <span>${item.price}</span>
          </div>

          <div className="cart-item-quantity">
            <span>Quantity: {item.quantity}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CartItems;
