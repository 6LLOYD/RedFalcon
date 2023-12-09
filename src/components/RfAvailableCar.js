import RfData from "./RfData";

const RfAvailablecar = () => {
  // Exemple de manipulation des données (vous pouvez effectuer d'autres opérations selon vos besoins)
  const totalCars = RfData.length;
  let carsString = totalCars > 1 ? "voitures" : "voiture";

  return (
    <div>
      <h2>
        Total de {carsString} dans le catalogue : {totalCars}
      </h2>
    </div>
  );
};
export default RfAvailablecar;
