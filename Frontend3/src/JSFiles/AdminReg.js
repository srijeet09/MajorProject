import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../CSSFiles/AdminReg.css";
import { sendData2 } from "../JSFiles/services";
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

export function AdminReg() {
  const [name, setname] = useState("");
  const [nameError, setnameError] = useState("");

  const [org, setorg] = useState(0);
  const [orgError, setorgError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [security, setSecurity] = useState("");
  const [securityError, setSecurityError] = useState("");

  const [redirect, setRedirect] = useState(null);

  const handlename = (e) => {
    setname(e.target.value);
    setnameError("");
  };
  const handleorg = (e) => {
    setorg(e.target.value);
    setorgError("");
  };
  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };

  const handleSecurityChange = (e) => {
    setSecurityError("");
    setSecurity(e.target.value);
  };

  const handleSubmit = async (e) => {
    var valid = true;
    e.preventDefault();

    // name check
    if (!name == "") {
      const fname = /^[a-zA-Z ]+$/;
      if (name.match(fname)) {
        if (name.length > 3) {
          setnameError("");
        } else {
          valid = false;
          setnameError("*Name must have more than 3 characters");
        }
      } else {
        valid = false;
        setnameError("*name must have only characters");
      }
    } else {
      valid = false;
      setnameError("*Please enter your name");
    }

    //organization name check
    if (!org == 0) {
      const orgname = /^[0-9]{1,}$/;
      if (org.match(orgname)) {
        setorgError("");
      } else {
        valid = false;
        setorgError("*it must have only numbers");
      }
    } else {
      valid = false;
      setorgError("*Please fill the field");
    }

    // email check
    if (!email == "") {
      //check valid email
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(email)) {
        setEmailError("");
      } else {
        valid = false;
        setEmailError("*Invalid email");
      }
    } else {
      valid = false;
      setEmailError("*Please enter your email");
    }

    // Security check
    if (!security == "") {
      const fname = /^[a-zA-Z]{1,}$/;
      if (security.match(fname)) {
        if (security.length > 3) {
          setSecurityError("");
        } else {
          valid = false;
          setSecurityError("*Input must have more than 3 characters");
        }
      } else {
        valid = false;
        setSecurityError("*Input must have only characters");
      }
    } else {
      valid = false;
      setSecurityError("*Please enter your pet dog's name");
    }

    // password check
    if (!password == "") {
      if (password.length > 6) {
        setPasswordError("");
      } else {
        valid = false;
        setPasswordError("*Password must have more than 6 characters");
      }
    } else {
      valid = false;
      setPasswordError("*Please enter your password");
    }
    const CryptoJS = require("crypto-js");
    var key = "12345";
    if (valid == true) {
      const encrypted = CryptoJS.AES.encrypt(password, key);
      var b = encrypted.toString();
      const a = {
        name: name,
        id: org,
        email: email,
        password: b,
        security: security,
      };
      const response = await sendData2(a);
      alert("Account created successfully!");
      setRedirect("/login");
    }
  };

  return (
    <div class="main">
      <form class="regForm" onSubmit={handleSubmit}>
        <div class="Create">CREATE ACCOUNT</div>

        <div class="first">
          <b>Name</b>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={handlename}
            value={name}
          />
          {nameError && <div className="error-msg">{nameError}</div>}
        </div>
        <br></br>

        <div class="first">
          <b>Organization Id</b>
          <br />
          <input
            type="text"
            id="org"
            placeholder="Enter your Organization Id"
            onChange={handleorg}
            value={org}
          />
          {orgError && <div className="error-msg">{orgError}</div>}
        </div>
        <br></br>

        <div class="first">
          <b>Email</b>
          <br />
          <input
            type="text"
            id="emailid"
            placeholder="Enter your E-mail"
            onChange={handleEmailChange}
            value={email}
          />
          {emailError && <div className="error-msg">{emailError}</div>}
        </div>
        <br></br>

        <div class="first">
          <b>Set Password</b>
          <br />
          <input
            type="text"
            id="password"
            placeholder="Enter your Password"
            onChange={handlePasswordChange}
            value={password}
          />
          <br />
          {passwordError && <div className="error-msg">{passwordError}</div>}
        </div>
        <br></br>
        <div class="first">
          <b>What is your pet dog's name?</b>
          <br />
          <input
            type="text"
            id="security"
            placeholder="Security Question"
            onChange={handleSecurityChange}
            value={security}
          />
          {securityError && <div className="error-msg">{securityError}</div>}
        </div>
        <br></br>

        <div>
          <button type="submit" class="button">
            Create Account
          </button>
          {redirect ? <Navigate to={redirect} /> : null}
        </div>
      </form>
    </div>
  );
}
