import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class RfLogin extends Component {
  render() {
    return (
      <Fragment>
        <style>
          {`
          /* Vous pouvez personnaliser ces styles selon vos besoins */

          body {
            font-family: Arial, sans-serif;
            background-color: black;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          
          form {
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 5px rgb(0 0 0 /15%);
            width: 300px;
            backdrop-filter: blur(10px);
          }
          h2 {
            color: aliceblue; 
          }
          
          h2 span {
            color:red;
          }
          
          label {
            display: block;
            margin-bottom: 10px;
            color: aliceblue;
          }
          
          input {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            margin-bottom: 15px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          
          button {
            background-color: red;
            color:aliceblue;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            transition: background-color .75s;
          }
          
          button:hover {
            background-color: #333;
          }

          .moving-circle {
            position: absolute;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            animation: moveDown 5s infinite alternate; 
          }

          .left-circle {
            margin-top: 18px;
           margin-left:240px;
           background: rgb(255,255,255);
           background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,0,0,1) 71%, rgba(255,0,0,1) 100%); 
            animation-delay: 4s; 
          }

          .right-circle {
            margin-top: 18px;
            background: rgb(255,0,0);
            background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 31%, rgba(255,255,255,1) 100%);
            text-align: center; 
          }

          @keyframes moveDown {
            to {
              transform: translateY(45vh); 
            }
        `}
        </style>
        <div className="moving-circle left-circle"></div>
        <div className="moving-circle right-circle"></div>
        <h2>
          WELCOME TO <span>RedFalcon</span>
        </h2>
        <form>
          <label>
            USER
            <input type="text" />
          </label>
          <br />
          <label>
            PASSWORD
            <input type="password" />
          </label>
          <br />
          <Link to="/Home">
            <button>NEXT</button>
          </Link>
        </form>
      </Fragment>
    );
  }
}

export default RfLogin;
