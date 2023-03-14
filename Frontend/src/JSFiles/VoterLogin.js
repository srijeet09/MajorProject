import { Component } from "react";
import { getId, gettId } from "./services";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Redirect } from "react-router-dom";

export class VoterLogin extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      admin: "",
      redirect: null,
    };
  }

  handle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logged = async (event) => {
    const fname = /^[0-9]{1,}$/;
    const lname = /^[a-zA-Z ]{1,}$/;
    if (this.state.id == null || this.state.admin == null) {
      alert("enter values");
    } else if (this.state.id.match(fname) && this.state.admin.match(lname)) {
      const ide = this.state.id;
      const admins = this.state.admin;
      var p = {
        id: ide,
        admin: admins,
      };
      console.log(ide);
      const response = await gettId(p);
      if (response.data.id == "" || response.data.admin == "") {
        alert("incorrect credentials");
        this.setState({ id: "" });
        this.setState({ admin: "" });
      } else if (
        response.data.id == this.state.id &&
        response.data.admin == this.state.admin
      ) {
        sessionStorage.setItem("id", this.state.id);
        sessionStorage.setItem("name", this.state.admin);
        this.setState({ redirect: "/User" });
      } else {
        alert("Enter correct values");
      }
    } else {
      alert("enter a correct values");
      this.setState({ id: "" });
      this.setState({ admin: "" });
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
            <input
              type="text"
              name="admin"
              value={this.state.admin}
              onChange={this.handle}
              id="inp"
              placeholder="Enter your Organisation"
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
