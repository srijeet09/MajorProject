import { Component } from "react";
import {
  delete1,
  delete2,
  delete3,
  getData,
  getData11,
  getId,
  modify,
  sendData,
  sendId,
  Voted1,
} from "../JSFiles/services";
import "../CSSFiles/admins.css";
import { Link, Navigate } from "react-router-dom";

let flag = false;
let flag2 = false;
let c = "";
let c1 = "";
let p1 = [];
export class Admin extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      votes: 0,
      name: "",
      admin: "",
      allname: [],
      redirect: "",
      allid: [],
    };
  }

  componentDidMount = async () => {
    c = sessionStorage.getItem("name");
    c1 = sessionStorage.getItem("ed");
    const p = {
      id: this.state.id,
      votes: this.state.votes,
      name: this.state.name,
      admin: c,
    };
    if (c != null && c1 != null) {
      const response1 = await getData11(p);
      console.log(response1.data);
      this.setState({ allname: response1.data });
      console.log(this.state.allname);
      this.setState({ admin: c });
      p1 = await Voted1(c);
      console.log(p1.data);
      this.setState({ allid: p1 });
    } else {
      this.setState({ redirect: "/login" });
    }
  };

  namer = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  aad = async (e) => {
    e.preventDefault();
    const fname = /^[a-zA-Z ]{1,}$/;
    if (this.state.name == "") {
      alert("please enter a valid name");
      this.setState({ name: "" });
    } else if (this.state.name.length <= 2) {
      alert("please enter a valid name with more than 2 charcters");
      this.setState({ name: "" });
    } else if (this.state.name.match(fname)) {
      const response = await sendData(this.state);
      console.log(response.data);
      const p = {
        id: this.state.id,
        votes: this.state.votes,
        name: this.state.name,
        admin: c,
      };
      const response1 = await getData11(p);
      console.log(response1.data);
      this.setState({ allname: response1.data });
      console.log(this.state.allname);
      this.setState({ name: "" });
    } else {
      alert("enter a valid name");
      this.setState({ name: "" });
    }
  };

  delete1 = async (event) => {
    var a = event.target.value;
    this.setState({ id: a });
    const response2 = await sendId(a);
    const p = {
      id: this.state.id,
      votes: this.state.votes,
      name: this.state.name,
      admin: c,
    };
    const response1 = await getData11(p);
    console.log(response1.data);
    this.setState({ allname: response1.data });
    console.log(this.state.allname);
  };
  delete = async () => {
    const response = await delete1(this.state.admin);
    const reponse1 = await delete2(this.state.admin);
    const response3 = await delete3(this.state.admin);
    c = null;
    this.setState({ redirect: "/login" });
  };

  edit1 = async (event) => {
    const a3 = event.target.value;
    console.log(a3);
    const response3 = await getId(a3);
    console.log(response3);
    console.log(response3.data.id);
    const a1 = response3.data.name;
    this.setState({ name: a1 });
    this.setState({ id: a3 });
    const response2 = await sendId(a3);
    const p = {
      id: this.state.id,
      votes: this.state.votes,
      name: this.state.name,
      admin: c,
    };
    const response1 = await getData11(p);
    console.log(response1.data);
    this.setState({ allname: response1.data });
    console.log(this.state.allname);
  };
  result = (e) => {
    e.preventDefault();
    if (flag == false) {
      flag = true;
    } else {
      flag = false;
    }
    this.forceUpdate();
  };

  Voted = async (e) => {
    e.preventDefault();
    if (flag2 == false) {
      flag2 = true;
    } else {
      flag2 = false;
    }
    this.forceUpdate();
  };
  LogOut = () => {
    this.setState({ redirect: "/login" });
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("ed");
    c = null;
  };

  render() {
    return (
      <>
        <div id="ram">
          <div id="ravi">
            <div id="him1">
              <div>
                <h1>
                  Hi <strong className="bg-success">{c}</strong>,  Good to see you again!
                </h1>
                <br></br>
                <h3 className="bg-warning">To Add No of Candidates:</h3>
                <br></br>
                <input
                  name="name"
                  className="border border-primary"
                  type="text"
                  placeholder="Enter name"
                  id="name"
                  
                  value={this.state.name}
                  required
                  onChange={this.namer}
                />
                <button class="btn btn-primary ms-2 fs-5 mb-3 " onClick={this.aad}>
                  Add Candidates
                </button>
              </div>
              <table id="him2">
                <tr>
                  <th>name</th>
                  <th>delete</th>
                  <th>edit</th>
                </tr>
                {this.state.allname.map((user) => (
                  <tr>
                    <td>{user.name}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={this.delete1}
                        value={user.id}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={this.edit1}
                        value={user.id}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <div>
              <button class="butter" onClick={this.result}>
                Result
              </button>
              <button class="butter" onClick={this.LogOut}>
                LogOut
              </button>
              <button class="butter1" onClick={this.delete}>
                DeleteAccount
              </button>
              <Link to="/VoterId">
                <button className="butter2">
                  Click Here to Register Voters
                </button>
              </Link>
              <button class="butter1" onClick={this.Voted}>
                Voted Id
              </button>
            </div>

            {flag ? (
              <>
                <div id="himer">
                  <table id="him3">
                    <tr>
                      <th>Name</th>
                      <th>Vote</th>
                    </tr>
                    {this.state.allname.map((user) => {
                      return (
                        <tr>
                          <td>
                            <p1>{user.name}</p1>
                          </td>
                          <td>
                            <p1>{user.votes}</p1>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </>
            ) : null}
            {flag2 ? (
              <>
                <table id="him4">
                  <tr>
                    <th>Voted</th>
                  </tr>
                  {p1.data.map((Voter) => {
                    return (
                      <tr>
                        <td>
                          <p1>{Voter.id}</p1>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </>
            ) : null}
          </div>
        </div>

        {c === null ? <Navigate to={this.state.redirect} /> : null}
      </>
    );
  }
}
