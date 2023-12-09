import { Component } from "react";
import RfCars from "./components/RfCars.js";
import "./App.css";

class App extends Component {
  // État initial de l'application
  state = {};

  // Fonction pour changer le titre en utilisant un événement de bouton
  // changeTitle = (e) => {
  //   console.log(e.target);
  //   this.setState({
  //     titre: "Catalogue"
  //   });
  // }

  // Fonction pour changer le titre en passant un paramètre
  // changeViaParams = (titre) => {
  //   this.setState({
  //     titre
  //   });
  // }

  // Fonction pour changer le titre en utilisant la méthode bind
  // changeViaBind = (param) => {
  //   this.setState({
  //     titre: param
  //   })
  // };

  // Fonction pour changer le titre en utilisant la valeur d'un champ d'entrée
  // changeViaInput = (e) => {
  //   console.log(e.target.value);
  //   this.setState({
  //     titre: e.target.value
  //   })
  // };

  // Rendu de l'application React
  render() {
    return (
      <div className="App">
        {/* Composant MyCars avec le titre provenant de l'état */}
        <RfCars />

        {/* Bouton pour déclencher la fonction changeTitle */}
        {/* <button onClick={this.changeTitle}>Changer le nom</button> */}

        {/* Bouton pour déclencher la fonction changeViaParams avec un titre spécifié */}
        {/* <button onClick={() => this.changeViaParams('Nouveau Titre')}>Changer via Paramètres</button> */}

        {/* Bouton pour déclencher la fonction changeViaBind avec un titre spécifié via la méthode bind */}
        {/* <button onClick={this.changeViaBind.bind(this, 'Titre via Bind')}>Changer via Bind</button> */}

        {/* Champ d'entrée contrôlé pour mettre à jour le titre en temps réel */}
        {/* <input type="text" onChange={this.changeViaInput} value={this.state.titre}/> */}
      </div>
    );
  }
}

// Exporte le composant App pour être utilisé ailleurs dans l'application
export default App;
