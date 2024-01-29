import { Link } from "react-router-dom";

const RfNavbar = () => {
  // const navbarStyle = {
  //   backgroundColor: "#333",
  //   padding: "15px",
  //   color: "white",
  //   height: "70px",
  //   display: "flex",
  //   flex: "1",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // };

  const companyNameStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    background: "linear-gradient(to right, #FFFFFF, #FF0000)", // Dégradé du blanc (#FFFFFF) vers le rouge (#FF0000)
    WebkitBackgroundClip: "text", // Pour appliquer le dégradé au texte
    color: "transparent", // Pour rendre le texte transparent
    margin: 0, // Pour enlever la marge par défaut
    padding: 0, // Pour enlever le padding par défaut
  };

  // const navItemStyle = {
  //   display: "inline",
  //   marginRight: "20px",
  //   fontSize: "20px",
  //   listStyleType: "none",
  //   background: "linear-gradient(to right, #FFFFFF, #FF0000)", // Dégradé du blanc (#FFFFFF) vers le rouge (#FF0000)
  //   WebkitBackgroundClip: "text", // Pour appliquer le dégradé au texte
  //   color: "transparent", // Pour rendre le texte transparent
  // };

  // const separatorStyle = {
  //   display: "inline",
  //   marginRight: "20px",
  //   fontSize: "20px",
  //   color: "#A3AB78", // Couleur du séparateur
  // };d

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <p style={companyNameStyle}>RedFalcon</p>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-auto">
              <Link
                className="nav-link"
                aria-current="page"
                to="/Home"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingTop: "17px",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Catalog"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingTop: "17px",
                }}
              >
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingTop: "17px",
                }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="40px"
                  viewBox="0 0 30 32"
                  enableBackground="new 0 0 30 32"
                  fill="#ffffff"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="#808184"
                        d="M0,30.5C0,31.327,0.673,32,1.5,32h21c0.827,0,1.5-0.673,1.5-1.5V22c0-0.276-0.224-0.5-0.5-0.5 S23,21.724,23,22v8.5c0,0.275-0.224,0.5-0.5,0.5h-21C1.224,31,1,30.775,1,30.5v-29C1,1.225,1.224,1,1.5,1h21 C22.776,1,23,1.225,23,1.5V10c0,0.276,0.224,0.5,0.5,0.5S24,10.276,24,10V1.5C24,0.673,23.327,0,22.5,0h-21C0.673,0,0,0.673,0,1.5 V30.5z"
                      />{" "}
                      <path
                        fill="#808184"
                        d="M25.799,20.085c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146l3.231-3.231 c0.195-0.195,0.195-0.512,0-0.707l-3.231-3.231c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L28.177,16H14 c-0.276,0-0.5,0.224-0.5,0.5S13.724,17,14,17h14.177l-2.378,2.378C25.604,19.573,25.604,19.89,25.799,20.085z"
                      />{" "}
                    </g>{" "}
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default RfNavbar;
