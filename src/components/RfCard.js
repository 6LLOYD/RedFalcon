import RfWrapper from "./RfWrapper";
import RfButton from "./RfButton";
import RfImageCarousel from "./RfImageCarousel";

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
  // Renvoie le contenu du composant uniquement si la propriété children est définie
  return (
    name && (
      <RfWrapper>
        <RfImageCarousel />
        <div
          style={{
            textAlign: "left",
            fontWeight: "bold",
            height: "31.33px",
            textTransform: "uppercase",
            marginTop: "20px",
          }}
        >
          <p
            style={{
              display: "inline",
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "13px",
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
              fontSize: "13px",
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
              fontSize: "13px",
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
              fontSize: "13px",
              display: "inline",
              marginLeft: "10px",
              width: "fit-content",
              backgroundColor: "#A3AB78",
              textTransform: "lowerCase",
            }}
          >
            {color}
          </p>
        </div>
        <div
          style={{
            textAlign: "left",
            fontWeight: "bold",
            height: "31.33px",
            marginTop: "15px",
          }}
        >
          <p
            style={{
              display: "inline-block", // Ajoutez cette propriété pour aligner les éléments sur la même ligne
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "13px",
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
              fontSize: "13px",
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
              fontSize: "13px",
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
              fontSize: "13px",
              marginLeft: "10px",
              width: "fit-content",
              backgroundColor: "#A3AB78",
            }}
          >
            {fuel}
          </p>
        </div>
        <div style={{ marginTop: "15px" }}>
          <p
            style={{
              border: "1.8px solid",
              padding: "5px",
              borderRadius: "10px",
              fontSize: "13px",
              backgroundColor: "#A3AB78",
              fontWeight: "bold",
              width: "100px",
              display: "inline-block",
            }}
          >
            {price} €
          </p>
          <RfButton />
        </div>
      </RfWrapper>
    )
  );
};

// Exporte le composant Car pour être utilisé ailleurs dans l'application
export default RfCard;
