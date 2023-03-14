import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./JSXFolder/Home";
import Form from "./JSXFolder/Form";
import { AdminLogin } from "./JSFiles/AdminLogin";
import { AdminReg } from "./JSFiles/AdminReg";
import Header from "./JSXFolder/Header";
import Footer from "./JSXFolder/Footer";
import "./CSSFiles/App.css";
import { ContactUs } from "./JSFiles/ContactUs";
import { Admin } from "./JSFiles/admin";
import { Users } from "./JSFiles/user";
import { Japoo, VoterLogin } from "./JSFiles/VoterLogin";
import { AboutUs } from "./JSFiles/AboutUs";
import { VoterId } from "./JSFiles/VoterId";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/Form" element={<VoterLogin />} />
        <Route exact path="/login" element={<AdminLogin />} />
        <Route exact path="/reg" element={<AdminReg />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/User" element={<Users />} />
        <Route exact path="/Aboutus" element={<AboutUs />} />
        <Route exact path="/VoterId" element={<VoterId />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
