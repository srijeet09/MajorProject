import { Component } from "react";
import { getId, gettId } from "../JSFiles/services";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Redirect } from "react-router-dom";

export class Japoo extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      redirect: null,
    };
  }

  handle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logged = async (event) => {
    const fname = /^[0-9]{1,}$/;
    if (this.state.id == null) {
      alert("enter a value");
    } else if (this.state.id.match(fname)) {
      const ide = this.state.id;
      console.log(ide);
      const response = await gettId(ide);
      if (response.data == "") {
        alert("incorrect credentials");
        this.setState({ id: "" });
      } else {
        this.setState({ redirect: "/User" });
      }
    } else {
      alert("enter a number");
      this.setState({ id: "" });
    }
  };
  render() {
    return (
      <body id="oper">
        <div id="op">
          <div id="lo">
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handle}
              id="inp"
              placeholder="Enter your Voter ID"
            />
            <button onClick={this.logged} id="btn">
              submit
            </button>

            {this.state.redirect ? <Navigate to={this.state.redirect} /> : null}
          </div>
        </div>
      </body>
    );
  }
}
