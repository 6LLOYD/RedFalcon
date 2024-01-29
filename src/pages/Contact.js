import { Component, Fragment } from "react";
import RfNavbar from "../components/RfNavbar";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <style>
          {`
          body{
            background-color: #f2f2f2;
          }
          .contact-form-container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          
          .contact-form {
            display: flex;
            flex-direction: column;
          }
          
          label {
            margin-bottom: 8px;
          }
          
          input,
          textarea {
            padding: 8px;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          #message{
            height:300px;
          }
          button {
            padding: 10px;
            background-color: #333;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color .75s;
          }
          
          button:hover {
            background-color: red;
          }
          
          @media (max-width: 600px) {
            .contact-form-container {
              padding: 10px;
            }
          
            input,
            textarea {
              width: 100%;
            }
          }
          
          `}
        </style>
        <RfNavbar />
        <div className="contact-form-container">
          <h2>Contact us</h2>
          <form onSubmit={this.handleSubmit} className="contact-form">
            <label htmlFor="name">NAME :</label>
            <input type="text" id="name" />

            <label htmlFor="email">E-MAIL :</label>
            <input type="email" id="email" />

            <label htmlFor="subject">SUBJECT :</label>
            <input type="text" id="subject" />

            <label htmlFor="message">MESSAGE :</label>
            <textarea id="message" />

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default Contact;
