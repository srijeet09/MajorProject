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
} from "../JSFiles/services";
import "../CSSFiles/admins.css";
import { Link, Navigate } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
let flag = false;
let c = "";
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
    };
  }

  componentDidMount = async () => {
    c = sessionStorage.getItem("name");
    const p = {
      id: this.state.id,
      votes: this.state.votes,
      name: this.state.name,
      admin: c,
    };
    if (c != null) {
      const response1 = await getData11(p);
      console.log(response1.data);
      this.setState({ allname: response1.data });
      console.log(this.state.allname);
      this.setState({ admin: c });
    } else {
      this.setState({ redirect: "/login" });
    }
  };

  namer = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  aad = async (e) => {
    e.preventDefault();
    const fname = /^[a-zA-Z]{1,}$/;
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
  result = () => {
    flag = true;
    this.forceUpdate();
  };
  LogOut = () => {
    this.setState({ redirect: "/login" });
    sessionStorage.removeItem("name");
    c = null;
  };

  render() {
    return (
      <>
        <div id="ram">
          <div id="ravi">
            <h1>
              <h1>
                Hi <strong>{c}</strong> Good to see you again
              </h1>
              <br></br>
              <h3>To Add No of Candidates:</h3>
              <br></br>
              <input
                name="name"
                type="text"
                placeholder="Enter name"
                id="name"
                value={this.state.name}
                required
                onChange={this.namer}
              />
              <button class="butter" onClick={this.aad}>
                Add Candidates
              </button>
            </h1>
            <div id="him1">
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
                        class="butter"
                        onClick={this.delete1}
                        value={user.id}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        class="butter"
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
              <button class="butter" onClick={this.delete}>
                DeleteAccount
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
          </div>
        </div>
        <Link to="/VoterId">
          <button>Click Here to Register Voters</button>
        </Link>

        {c === null ? <Navigate to={this.state.redirect} /> : null}
      </>
    );
  }
}
