import { Component } from "react";
import RfCard from "./RfCard";
import RfHeader from "./RfHeader";
import RfData from "./RfData";
import RfAvailablecar from "./RfAvailableCar";

class RfCars extends Component {
  state = {
    titre: "Catalogue Voitures",
  };

  // Rendu du composant MyCars avec des éléments HTML et des composants Car imbriqués
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

// Exporte le composant MyCars pour être utilisé ailleurs dans l'application
export default RfCars;
