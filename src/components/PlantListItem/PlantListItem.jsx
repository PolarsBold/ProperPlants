function PlantListItem({ plant, handleAddToCart }) {
  return (
    <li className="plant-item">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button
        onClick={() => {
          handleAddToCart(plant);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}

export default PlantListItem;
