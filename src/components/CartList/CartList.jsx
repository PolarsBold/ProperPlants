function CartList({ cart, setCart }) {
  const handleCartAmount = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((plant) =>
        plant.id === id
          ? { ...plant, quantity: plant.quantity + amount }
          : plant
      )
    );
  };

  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.map((plant) => {
        return (
          <li key={plant.id} className="cart-item">
            <p>
              {plant.img} {plant.name}
            </p>
            <section className="buttons">
              <button
                className="plus"
                onClick={() => {
                  handleCartAmount(plant.id, +1);
                }}
              >
                +
              </button>
              <p>{plant.quantity}</p>
              <button
                className="minus"
                onClick={() => {
                  handleCartAmount(plant.id, -1);
                }}
              >
                -
              </button>
            </section>
          </li>
        );
      })}
    </section>
  );
}

export default CartList;
