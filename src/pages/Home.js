import { Component, Fragment } from "react";
import RfNavbar from "../components/RfNavbar";
import { Link } from "react-router-dom";
import RfLogin from "./Login";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <style>
          {`
          body {
            background-color: #f2f2f2;
          }

          .home-container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          header {
            text-align: center;
            margin-bottom: 20px;
          }

          header h1 {
            margin-bottom:20px
          }

          h1,h3 {
            color: #333;
          }

          .main-content p{
            color: #333;
            text-decoration: none; 
            font-weight: bold;
          }

          .main-content p:hover{
            color: black
          }

          footer {
            text-align: center;
            margin-top: 20px;
          }

          footer p {
            text-decoration: none; 
            color: inherit; 
            color: #333;  
            font-weight: bold;
          }

          footer p:hover {
            color: black;  
          }

          #redfalcon {
            background: linear-gradient(
              to right,
              #FFFFFF,
              red
            );
            -webkit-background-clip: text;
            color: transparent;
          }
        `}
        </style>
        <RfNavbar stroke={this.state.color} />
        <div className="home-container">
          <header>
            <h1>Hello : World</h1>
            <h2>
              Welcome to <span id="redfalcon"> RedFalcon</span>
            </h2>
          </header>
          <section className="main-content">
            <Link to="/Catalog">
              <p style={{ marginTop: "40px" }}>
                Explore our selection of mid to high-range cars.
              </p>
            </Link>
            <p style={{ textAlign: "left", marginTop: "40px" }}>
              RedFalcon is a specialized car dealership, focusing on the sale of
              mid to high-range cars. With our experience and commitment to
              customer satisfaction, we offer an exceptional selection of
              vehicles from renowned brands.
            </p>
            <h3 style={{ marginTop: "50px" }}>Our Services</h3>
            <p style={{ textAlign: "left" }}>
              We offer more than just car sales. Our services include technical
              expertise, flexible financing solutions, and quality after-sales
              service. We are here to accompany you at every stage of your
              automotive journey.
            </p>

            <h3 style={{ marginTop: "50px" }}>Our Range of Cars</h3>
            <p style={{ textAlign: "left" }}>
              Explore our extensive range of cars, including recent models,
              electric vehicles, hybrids, and luxury cars. Our dedicated team is
              ready to help you find the car that perfectly fits your needs and
              lifestyle.
            </p>

            <h3 style={{ marginTop: "50px" }}>Contact Us</h3>
            <p style={{ textAlign: "left" }}>
              We look forward to welcoming you to our showroom. Feel free to
              contact us to schedule a test drive, inquire about our special
              offers, or discuss your specific needs.
            </p>
          </section>
          <footer>
            <Link to="/Contact">
              <p style={{ marginTop: "30px" }}>
                Contact us for more information.
              </p>
            </Link>
          </footer>
        </div>
      </Fragment>
    );
  }
}
export default Home;
