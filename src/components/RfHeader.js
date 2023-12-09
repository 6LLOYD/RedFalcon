// Composant fonctionnel MyHeader qui prend des propriétés (props) children
const RfHeader = ({ children }) => (
  <h1 style={{ marginBottom: "50px" }}>{children}</h1>
);

// Exporte le composant MyHeader pour être utilisé ailleurs dans l'application
export default RfHeader;
