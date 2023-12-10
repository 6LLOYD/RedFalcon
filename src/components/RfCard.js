import RfWrapper from "./RfWrapper";

// Composant fonctionnel Car qui prend des propriétés (props) children et color
const RfCard = ({
  name,
  color,
  year,
  model,
  mileAge,
  HP,
  transmissionType,
  fuel,
  price,
}) => {
  // Variable pour stocker l'information sur la couleur
  let colorInfo = "";

  // Vérifie si la propriété color est définie
  if (color) {
    colorInfo = color;
  } else {
    colorInfo = "Néant";
  }

  // Renvoie le contenu du composant uniquement si la propriété children est définie
  return (
    name && (
      <RfWrapper>
        <div
          style={{
            marginTop: "200px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          <p
            style={{
              display: "inline",
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              backgroundColor: "#A3AB78",
            }}
          >
            {name}
          </p>
          <span
            style={{
              border: "1.8px solid",
              padding: "5px",
              marginLeft: "10px",
              fontSize: "14px",
              borderRadius: "10px",
              backgroundColor: "#A3AB78",
            }}
          >
            {model}
          </span>
          <span
            style={{
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              width: "fit-content",
              marginLeft: "10px",
              minWidth: "min-content",
              backgroundColor: "#A3AB78",
            }}
          >
            {year}
          </span>
          <p
            style={{
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              display: "inline",
              marginLeft: "10px",
              width: "fit-content",
              backgroundColor: "#A3AB78",
            }}
          >
            {colorInfo}
          </p>
        </div>
        <div
          style={{
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          <p
            style={{
              display: "inline-block", // Ajoutez cette propriété pour aligner les éléments sur la même ligne
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              width: "fit-content",
              backgroundColor: "#A3AB78",
            }}
          >
            {mileAge} km
          </p>
          <p
            style={{
              display: "inline-block", // Ajoutez cette propriété pour aligner les éléments sur la même ligne
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              marginLeft: "10px",
              width: "fit-content",
              backgroundColor: "#A3AB78",
            }}
          >
            {HP} HP
          </p>
          <p
            style={{
              display: "inline-block", // Ajoutez cette propriété pour aligner les éléments sur la même ligne
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              marginLeft: "10px",
              width: "fit-content",
              backgroundColor: "#A3AB78",
            }}
          >
            {transmissionType}
          </p>

          <p
            style={{
              display: "inline-block", // Ajoutez cette propriété pour aligner les éléments sur la même ligne
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              marginLeft: "10px",
              width: "fit-content",
              backgroundColor: "#A3AB78",
            }}
          >
            {fuel}
          </p>
        </div>
        <div>
          <p
            style={{
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              backgroundColor: "#A3AB78",
              fontWeight: "bold",
              width: "100px",
              display: "inline-block",
            }}
          >
            {price} €
          </p>
          <button
            style={{
              padding: "5px",
              borderRadius: "10px",
              height: "31.33px",
              width: "255px",
              fontSize: "14px",
              backgroundColor: "#A3AB78",
              fontWeight: "bold",
              marginLeft: "10px", // Ajoutez cette ligne pour ajouter un espace entre le prix et le bouton
            }}
          >
            More Details...
          </button>
        </div>
      </RfWrapper>
    )
  );
};

// Exporte le composant Car pour être utilisé ailleurs dans l'application
export default RfCard;
