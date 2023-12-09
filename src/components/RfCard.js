import RfWrapper from "./RfWrapper";

// Composant fonctionnel Car qui prend des propriétés (props) children et color
const RfCard = ({ name, color, year, model }) => {
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
              border: "1px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          >
            {name}
          </p>
          <span
            style={{
              border: "1px solid",
              padding: "5px",
              marginLeft: "10px",
              fontSize: "14px",
              borderRadius: "10px",
              fontStyle: "italic",
            }}
          >
            {model}
          </span>
          <span
            style={{
              border: "1px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              fontStyle: "italic",
              width: "35px",
              marginLeft: "10px",
              minWidth: "min-content",
            }}
          >
            {year}
          </span>
          <p
            style={{
              border: "1px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "14px",
              fontStyle: "italic",
              display: "inline",
              marginLeft: "10px",
              minWidth: "min-content",
            }}
          >
            {colorInfo}
          </p>
        </div>
      </RfWrapper>
    )
  );
};

// Exporte le composant Car pour être utilisé ailleurs dans l'application
export default RfCard;
