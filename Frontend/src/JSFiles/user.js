import { Component } from "react";
import { Link, redirect } from "react-router-dom";
import { getData, getId, modify, senddId } from "../JSFiles/services";
import "../CSSFiles/users.css";
import { Navigate } from "react-router-dom";
import "../CSSFiles/trial.css";
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
    const response1 = await getData();
    console.log(response1.data);
    this.setState({ allname: response1.data });
    console.log(this.state.allname);
  };
  increment = async (event) => {
    var a1 = event.target.value;
    console.log(a1);
    const response1 = await getId(a1);
    const data = {
      id: a1,
      votes: response1.data.votes + 1,
      name: response1.data.name,
    };
    const response12 = await modify(data);
    console.log(response12.data);
    alert("you have voted so now you have been logged out");
    const response2 = await senddId();
    this.setState({ redirect: "/" });
  };
  render() {
    return (
      <div id="names">
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
                  <button onClick={this.increment} value={user.id} id="btn-1">
                    Vote
                  </button>
                </td>
              </tr>
            </>
          ))}
        </table>
        {this.state.redirect ? <Navigate to={this.state.redirect} /> : null}
      </div>
    );
  }
}
