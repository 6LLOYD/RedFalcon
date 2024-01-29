import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class RfLogin extends Component {
  state = {
    userName: "",
  };

  handleUserChange = (e) => {
    console.log(e.target.value);
    this.setState({ userName: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <style>
          {`
          .ma-page {
            font-family: Arial, sans-serif;
            background-color: black;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          
          .form {
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 5px rgb(0 0 0 /15%);
            width: 300px;
            backdrop-filter: blur(10px);
            margin : 20px
          }

          .h2 {
            color: aliceblue; 
          }
          
          .h2-span {
            color:red;
            font-size: 26px;
          }
          
          .form-label {
            display: block;
            margin-bottom: 10px;
            color: aliceblue;
          }
          
          .form-control {
            width: 100%;
            margin-top: 10px;
            margin-bottom: 15px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          
          .btn {
            background-color: red;
            color: aliceblue;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            transition: background-color .75s;
          }
          
          .btn:hover {
            background-color: #333;
          }

        `}
        </style>
        <div className="ma-page">
          <h2 className="h2">
            WELCOME TO{" "}
            <span className="h2-span" style={{ fontSize: "26px" }}>
              RedFalcon
            </span>
          </h2>
          <form className="form">
            <label className="form-label">
              USER
              <input
                type="text"
                className="form-control"
                value={this.state.userName}
                onChange={this.handleUserChange}
              />
            </label>
            <br />
            <Link to="/Home">
              <button className="btn btn-primary">NEXT</button>
            </Link>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default RfLogin;
