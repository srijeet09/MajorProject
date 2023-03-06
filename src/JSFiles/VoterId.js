import { Component } from "react";
import { deleteId, getData1, sendData3 } from "./services";

export class VoterId extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      allid: [],
    };
  }

  componentDidMount = async () => {
    const response1 = await getData1();
    console.log(response1.data);
    this.setState({ allid: response1.data });
  };

  hello = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  add = async () => {
    const a = /^[0-9]{1,}$/;
    if (this.state.id > 0 && this.state.id.match(a)) {
      const response = await sendData3(this.state);
      console.log(response.data);
      const response1 = await getData1();
      this.setState({ allid: response1.data });
      this.setState({ id: "" });
    } else {
      this.setState({ id: "" });
      alert("Enter correct ceredentials");
    }
  };
  delete1 = async (e) => {
    const a = e.target.value;
    const response = await deleteId(a);
    console.log(response.data);
    const response1 = await getData1();
    this.setState({ allid: response1.data });
  };
  render() {
    return (
      <>
        <div id="Shyam">
          <div id="ram">
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
      </>
    );
  }
}
