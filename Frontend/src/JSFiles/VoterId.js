import { Component } from "react";
import { Navigate } from "react-router-dom";
import { deletedId, deleteId, getData1, sendData3, senddId } from "./services";
import "../CSSFiles/VoterId.css";
let c = "";
export class VoterId extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      admin: "",
      allid: [],
      redirect: "",
    };
  }

  componentDidMount = async () => {
    c = sessionStorage.getItem("name");
    const p = {
      id: this.state.id,
      admin: c,
    };
    if (c != null) {
      const response1 = await getData1(p);
      console.log(response1.data);
      this.setState({ allid: response1.data });
      this.setState({ admin: c });
    } else {
      this.setState({ redirect: "/login" });
    }
  };

  hello = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  add = async () => {
    const a = /^[0-9]{1,9}$/;
    if (this.state.id > 0 && this.state.id.match(a)) {
      const response = await sendData3(this.state);
      console.log(response.data);
      const p = {
        id: this.state.id,
        admin: c,
      };
      const response1 = await getData1(p);
      this.setState({ allid: response1.data });
      this.setState({ id: "" });
    } else {
      this.setState({ id: "" });
      alert("Enter correct ceredentials");
    }
  };
  delete1 = async (e) => {
    const a = e.target.value;
    const p1 = {
      id: a,
      admin: c,
    };
    const response = await deletedId(p1);
    console.log(response.data);
    const p = {
      id: this.state.id,
      admin: c,
    };
    const response1 = await getData1(p);
    this.setState({ allid: response1.data });
  };
  render() {
    return (
      <>
        <div id="Shyam1">
          <div id="ram">
            <div>
              <h1>
                Hi <strong>{c}</strong> Good to see you again
              </h1>
              <br></br>
              <label>
                <h1>Add Voters</h1>
                <br></br>
                <input
                  name="id"
                  value={this.state.id}
                  onChange={this.hello}
                ></input>
              </label>
              <br></br>
              <br></br>
              <button class="butter" onClick={this.add}>
                Add
              </button>
            </div>
            <div id="him1">
              <table id="him2">
                <tr>
                  <th>Id</th>
                  <th>delete</th>
                </tr>
                {this.state.allid.map((user) => (
                  <tr>
                    <td>{user.id}</td>
                    <td>
                      <button
                        class="butter"
                        onClick={this.delete1}
                        value={user.id}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                ;
              </table>
            </div>
          </div>
        </div>
        {c === null ? <Navigate to={this.state.redirect} /> : null}
      </>
    );
  }
}
