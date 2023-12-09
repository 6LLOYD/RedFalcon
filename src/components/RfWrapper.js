// Composant fonctionnel Wrapper qui prend des propriétés (props) children
function RfWrapper({ children }) {
  return (
    // Renvoie un conteneur div stylisé avec des propriétés de style en ligne
    <div
      style={{
        backgroundColor: "grey",
        width: "400px",
        height: "350px",
        padding: "10px",
        margin: "5px",
        borderRadius: "10px",
        display: "inline-block",
      }}
    >
      {/* Affiche le contenu passé en tant que children */}
      {children}
    </div>
  );
}

// Exporte le composant Wrapper pour être utilisé ailleurs dans l'application
export default RfWrapper;
