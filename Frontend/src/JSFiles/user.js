import { Component } from "react";
import { Link, redirect } from "react-router-dom";
import {
  getData,
  getData12,
  getId,
  modify,
  senddId,
  Voted,
} from "../JSFiles/services";
import "../CSSFiles/users.css";
import { Navigate } from "react-router-dom";
import "../CSSFiles/trial.css";
let c = null;
let c1 = null;
export class Users extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      votes: 0,
      name: "",
      allname: [],
      redirect: null,
    };
  }

  componentDidMount = async () => {
    c = sessionStorage.getItem("Vname");
    c1 = sessionStorage.getItem("Vid");
    const p = c;
    if (c != null && c1 != null) {
      console.log(p);
      const response1 = await getData12(p);
      console.log(response1.data);
      this.setState({ allname: response1.data });
      console.log(this.state.allname);
    } else {
      this.setState({ redirect: "/Form" });
    }
  };
  increment = async (event) => {
    var a1 = event.target.value;
    console.log(a1);
    const response1 = await getId(a1);
    const data = {
      id: a1,
      votes: response1.data.votes + 1,
      name: response1.data.name,
      admin: response1.data.admin,
    };
    const response12 = await modify(data);
    const data2 = {
      id: c1,
      admin: c,
    };
    const response13 = await Voted(data2);
    console.log(response13.data);
    console.log(response12.data);
    c = sessionStorage.removeItem("Vname");
    alert("you have voted so now you have been logged out");
    const response2 = await senddId();
    this.setState({ redirect: "/" });
  };
  render() {
    return (
      <>
        <div id="names">
          <div>
            <h2 id="organisation" className="bg-light">
              {c} Welcomes you! Please Vote for your Candidate.
            </h2>
          </div>
          <table id="tabler">
            <tr>
              <th>Name</th>
              <th>Vote</th>
            </tr>
            {this.state.allname.map((user) => (
              <>
                <tr>
                  <td>{user.name}</td>
                  <td>
                    <button onClick={this.increment} value={user.id} className="btn btn-success">
                      Vote
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </table>
          {this.state.redirect ? <Navigate to={this.state.redirect} /> : null}
        </div>
      </>
    );
  }
}
