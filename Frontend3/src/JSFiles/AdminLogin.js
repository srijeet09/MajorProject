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
      security: "",
      redirect: null,
      c: false,
    };
  }
  handle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handle1 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handle3 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  haSubmit = async (e) => {
    e.preventDefault();
    const fname = /^[0-9]{1,}$/;
    if (this.state.email.match(fname)) {
      const response = await getttId(this.state.email);
      console.log(response.data.id, response.data.password);
      console.log(response.data);
      const CryptoJS = require("crypto-js");
      var key = "12345";
      var bytes = CryptoJS.AES.decrypt(response.data.password, key);
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      console.log(originalText);
      if (
        response.data.id == this.state.email &&
        originalText == this.state.password
      ) {
        sessionStorage.setItem("name", `${response.data.name}`);
        alert(`Hi ${response.data.name} Welcome to the Admin page`);
        this.setState({ redirect: "/admin" });
      } else if (
        response.data.id == this.state.email &&
        response.data.security == this.state.security
      ) {
        alert(`Hi ${response.data.name} your password is ${originalText}`);
      } else {
        alert("Enter Valid Credentials");
      }
    } else {
      alert("id will only be numeric");
    }
  };

  haClicked = (e) => {
    e.preventDefault();
    this.setState({ c: true });
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
              type="password"
              id="password1"
              placeholder="Enter your Password"
              name="password"
              value={this.state.password}
              onChange={this.handle1}
            />
          </div>
          <br></br>
          {this.state.c ? (
            <>
              <div>
                <label>What is Your Pet dog's name?</label>
                <br></br>
                <input
                  type="text"
                  id="password1"
                  placeholder="Security Question"
                  name="security"
                  value={this.state.security}
                  onChange={this.handle3}
                />
              </div>
              <br></br>
            </>
          ) : null}
          <div>
            <button class="sub-btn" onClick={this.haSubmit}>
              Submit
            </button>
            <button class="sub-btn" onClick={this.haClicked}>
              Forgot Password
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
