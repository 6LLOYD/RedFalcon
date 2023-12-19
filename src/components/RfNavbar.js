import { Link } from "react-router-dom";

const RfNavbar = () => {
  const navbarStyle = {
    backgroundColor: "#333",
    padding: "15px",
    color: "white",
    height: "70px",
    display: "flex",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const companyNameStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    background: "linear-gradient(to right, #FFFFFF, #FF0000)", // Dégradé du blanc (#FFFFFF) vers le rouge (#FF0000)
    WebkitBackgroundClip: "text", // Pour appliquer le dégradé au texte
    color: "transparent", // Pour rendre le texte transparent
    margin: 0, // Pour enlever la marge par défaut
    padding: 0, // Pour enlever le padding par défaut
  };

  const navItemStyle = {
    display: "inline",
    marginRight: "20px",
    fontSize: "20px",
    listStyleType: "none",
    background: "linear-gradient(to right, #FFFFFF, #FF0000)", // Dégradé du blanc (#FFFFFF) vers le rouge (#FF0000)
    WebkitBackgroundClip: "text", // Pour appliquer le dégradé au texte
    color: "transparent", // Pour rendre le texte transparent
  };

  const separatorStyle = {
    display: "inline",
    marginRight: "20px",
    fontSize: "20px",
    color: "#A3AB78", // Couleur du séparateur
  };

  return (
    <nav style={navbarStyle}>
      <p style={companyNameStyle}>RedFalcon</p>
      <span>Welcome : feorfjo</span>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          display: "flex",
        }}
      >
        <li style={navItemStyle}>
          <a href="/Home" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li style={separatorStyle}>-</li>
        <li style={navItemStyle}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/Catalog"
          >
            Catalog
          </Link>
        </li>
        <li style={separatorStyle}>-</li>
        <li style={navItemStyle}>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default RfNavbar;
