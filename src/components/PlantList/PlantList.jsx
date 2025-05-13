import PlantListItem from "../PlantListItem/PlantListItem";

function PlantList({ PLANTS, handleAddToCart }) {
  return (
    <section className="plant-list">
      <h2>Plants</h2>
      <ul>
        {PLANTS.map((plant) => (
          <PlantListItem
            key={plant.id}
            plant={plant}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </ul>
    </section>
  );
}

export default PlantList;
