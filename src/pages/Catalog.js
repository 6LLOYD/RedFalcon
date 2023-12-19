import { Component } from "react";
import RfCard from "../components/RfCard";
import RfHeader from "../components/RfHeader";
import RfData from "../components/RfData";
import RfAvailablecar from "../components/RfAvailableCar";
import { Fragment } from "react";
import RfNavbar from "../components/RfNavbar";

class RfCars extends Component {
  state = {
    titre: "Cars Catalog ",
  };

  // Rendu du composant MyCars avec des éléments HTML et des composants Car imbriqués
  render() {
    return (
      <Fragment>
        <RfNavbar />
        {/* Titre de la section avec événement onMouseOver pour ajouter ou supprimer une classe */}
        <RfHeader>{this.state.titre}</RfHeader>
        <RfAvailablecar />

        {/* Utilisation de la méthode map pour générer dynamiquement les composants Car */}
        {RfData.map(
          (
            {
              name,
              year,
              color,
              model,
              mileAge,
              HP,
              transmissionType,
              fuel,
              price,
            },
            index
          ) => {
            return (
              <RfCard
                key={index}
                name={name}
                year={year}
                color={color}
                model={model}
                mileAge={mileAge}
                HP={HP}
                transmissionType={transmissionType}
                fuel={fuel}
                price={price}
              />
            );
          }
        )}
      </Fragment>
    );
  }
}

// Exporte le composant MyCars pour être utilisé ailleurs dans l'application
export default RfCars;
