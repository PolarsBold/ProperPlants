import { useState } from "react";
import PLANTS from "./data.js";
import PlantList from "./components/PlantList/PlantList.jsx";
import CartList from "./components/CartList/CartList.jsx";

export default function App() {
  let [cart, setCart] = useState([]);

  const handleAddToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((object) => object.id === plant.id);
      if (existingItem) {
        return prevCart.map((object) =>
          object.id === plant.id
            ? { ...object, quantity: object.quantity + 1 }
            : object
        );
      } else {
        return [
          ...prevCart,
          { id: plant.id, name: plant.name, img: plant.image, quantity: 1 },
        ];
      }
    });
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantList PLANTS={PLANTS} handleAddToCart={handleAddToCart} />
        <CartList cart={cart} setCart={setCart} />
      </main>
    </>
  );
}
