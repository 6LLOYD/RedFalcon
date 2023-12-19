import { Fragment } from "react";
import RfData from "./RfData";

const RfAvailablecar = () => {
  // Exemple de manipulation des données (vous pouvez effectuer d'autres opérations selon vos besoins)
  const totalCars = RfData.length;
  let carsString = totalCars > 1 ? "cars" : "car";

  return (
    <Fragment>
      <h2>
        Available {carsString} in the catalog : {totalCars}
      </h2>
    </Fragment>
  );
};
export default RfAvailablecar;
