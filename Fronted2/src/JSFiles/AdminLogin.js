import "../CSSFiles/AdminLogin.css";
import { Component, useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import { getttId } from "../JSFiles/services";

export class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: "",
      redirect: null,
    };
  }
  handle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handle1 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  haSubmit = async (e) => {
    e.preventDefault();
    const fname = /^[0-9]{1,}$/;
    if (this.state.email.match(fname)) {
      const response = await getttId(this.state.email);
      console.log(response.data.id, response.data.password);
      console.log(response.data);
      if (
        response.data.id == this.state.email &&
        response.data.password == this.state.password
      ) {
        sessionStorage.setItem("name", `${response.data.name}`);
        alert(`Hi ${response.data.name} Welcome to the Admin page`);
        this.setState({ redirect: "/admin" });
      } else {
        alert("Enter Valid Credentials");
      }
    } else {
      alert("id will only be numeric");
    }
  };
  render() {
    return (
      <div className="div2">
        <form className="loginForm">
          <div class="Login">ADMIN LOGIN</div>

          <div>
            <label>Admin Id</label>
            <br></br>
            <input
              type="text"
              id="emailid1"
              placeholder="Enter your Id"
              name="email"
              value={this.state.email}
              onChange={this.handle}
            />
          </div>
          <br></br>

          <div>
            <label>Admin Password</label>
            <br></br>
            <input
              type="text"
              id="password1"
              placeholder="Enter your Password"
              name="password"
              value={this.state.password}
              onChange={this.handle1}
            />
          </div>
          <br></br>

          <div>
            <button class="sub-btn" onClick={this.haSubmit}>
              Submit
            </button>
          </div>
          <br></br>

          <div class="Create">
            <Link to="/reg">
              <span>
                <b>Create Account</b>
              </span>
            </Link>
          </div>
        </form>

        {this.state.redirect ? <Navigate to={this.state.redirect} /> : null}
      </div>
    );
  }
}
