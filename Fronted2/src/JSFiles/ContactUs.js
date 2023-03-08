import "../CSSFiles/contactus.css";
import { Component } from "react";
export class ContactUs extends Component {
  constructor() {
    super();
    this.state = { c3: 0 };
  }

  handle1 = (e) => {
    e.preventDefault();
    this.setState({ c3: 1 });
  };
  handle2 = (e) => {
    e.preventDefault();
    this.setState({ c3: 2 });
  };
  handle3 = (e) => {
    e.preventDefault();
    this.setState({ c3: 3 });
  };
  handle4 = (e) => {
    e.preventDefault();
    this.setState({ c3: 4 });
  };
  handle5 = (e) => {
    e.preventDefault();
    this.setState({ c3: 5 });
  };

  render() {
    return (
      <>
        <div id="b1">
          <div id="b2">
            <h1>Contact Us</h1>
            <br />
            Have any doubts, suggestions or feedback? Feel free to contact us
            at:
            <h1>Corporate Office:</h1>
            <br />
            E-Voting Limited,Arctic House,B. D. Sawant Marg,Chakala, Andheri
            (E),PO Box No 1470, Mumbai - 400 099. Toll free number:
            1800-102-2221 Email:Customer.care@E-Voting.com
            <br />
            <h2>Get in touch with us</h2>
            <form>
              <label id="name1" name="name">
                Enter your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                name="name"
                required
                pattern="[a-zA-Z]+"
                minlength="3"
                maxlength="10"
              />
              <br />
              <lable id="ema1" name="ema">
                Enter your Email
              </lable>
              <input
                type="email"
                id="ema"
                name="ema"
                placeholder="Enter Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
              <br />
              Select your query:
              <select>
                <option id="uty">About the company</option>
                <option id="uty">About the product</option>
                <option id="uty">About the oppurtunities</option>
              </select>
              <br />
              <button id="hello" type="submit">
                Submit
              </button>
              <br />
              We will shortly get in touch with you.
            </form>
          </div>
        </div>
        <>
          {console.log(this.state.c3)}
          {this.state.c3 == 0 ? (
            <div class="jack">
              Provide us Your Feedback. Helps us in Improving
              <div>
                <input
                  type="submit"
                  class="t"
                  value="1"
                  onClick={this.handle1}
                />
                <input
                  type="submit"
                  class="t"
                  value="2"
                  onClick={this.handle2}
                />
                <input
                  type="submit"
                  class="t"
                  value="3"
                  onClick={this.handle3}
                />
                <input
                  type="submit"
                  class="t"
                  value="4"
                  onClick={this.handle4}
                />
                <input
                  type="submit"
                  class="t"
                  value="5"
                  onClick={this.handle5}
                />
              </div>
            </div>
          ) : null}
          {this.state.c3 == 1 ? (
            <div class="jack">
              Provide us Your Feedback Helps us in Improving
              <div>
                <input
                  type="submit"
                  class="t"
                  value="1"
                  onClick={this.handle1}
                  style={{ backgroundColor: "brown" }}
                />
                <input
                  type="submit"
                  class="t"
                  value="2"
                  onClick={this.handle2}
                />
                <input
                  type="submit"
                  class="t"
                  value="3"
                  onClick={this.handle3}
                />
                <input
                  type="submit"
                  class="t"
                  value="4"
                  onClick={this.handle4}
                />
                <input
                  type="submit"
                  class="t"
                  value="5"
                  onClick={this.handle5}
                />
              </div>
              <div>Hope to serve you better in future &#128543;</div>
            </div>
          ) : null}
          {this.state.c3 == 2 ? (
            <div class="jack">
              Provide us Your Feedback Helps us in Improving
              <div>
                <input
                  type="submit"
                  class="t"
                  value="1"
                  onClick={this.handle1}
                />
                <input
                  type="submit"
                  class="t"
                  value="2"
                  onClick={this.handle2}
                  style={{ backgroundColor: "brown" }}
                />
                <input
                  type="submit"
                  class="t"
                  value="3"
                  onClick={this.handle3}
                />
                <input
                  type="submit"
                  class="t"
                  value="4"
                  onClick={this.handle4}
                />
                <input
                  type="submit"
                  class="t"
                  value="5"
                  onClick={this.handle5}
                />
              </div>
              <div>Sorry for Incovinence &#128542;</div>
            </div>
          ) : null}
          {this.state.c3 == 3 ? (
            <div class="jack">
              Provide us Your Feedback Helps us in Improving
              <div>
                <input
                  type="submit"
                  class="t"
                  value="1"
                  onClick={this.handle1}
                />
                <input
                  type="submit"
                  class="t"
                  value="2"
                  onClick={this.handle2}
                />
                <input
                  type="submit"
                  class="t"
                  value="3"
                  onClick={this.handle3}
                  style={{ backgroundColor: "brown" }}
                />
                <input
                  type="submit"
                  class="t"
                  value="4"
                  onClick={this.handle4}
                />
                <input
                  type="submit"
                  class="t"
                  value="5"
                  onClick={this.handle5}
                />
              </div>
              <div>We WiLL Improve &#128528;</div>
            </div>
          ) : null}
          {this.state.c3 == 4 ? (
            <div class="jack">
              Provide us Your Feedback Helps us in Improving
              <div>
                <input
                  type="submit"
                  class="t"
                  value="1"
                  onClick={this.handle1}
                />
                <input
                  type="submit"
                  class="t"
                  value="2"
                  onClick={this.handle2}
                />
                <input
                  type="submit"
                  class="t"
                  value="3"
                  onClick={this.handle3}
                />
                <input
                  type="submit"
                  class="t"
                  value="4"
                  onClick={this.handle4}
                  style={{ backgroundColor: "brown" }}
                />
                <input
                  type="submit"
                  class="t"
                  value="5"
                  onClick={this.handle5}
                />
              </div>
              <div>We Will keep it up &#128526;</div>
            </div>
          ) : null}
          {this.state.c3 == 5 ? (
            <div class="jack">
              Provide us Your Feedback Helps us in Improving
              <div>
                <input
                  type="submit"
                  class="t"
                  value="1"
                  onClick={this.handle1}
                />
                <input
                  type="submit"
                  class="t"
                  value="2"
                  onClick={this.handle2}
                />
                <input
                  type="submit"
                  class="t"
                  value="3"
                  onClick={this.handle3}
                />
                <input
                  type="submit"
                  class="t"
                  value="4"
                  onClick={this.handle4}
                />
                <input
                  type="submit"
                  class="t"
                  value="5"
                  onClick={this.handle5}
                  style={{ backgroundColor: "brown" }}
                />
              </div>
              <div>Thank you For such Good Reply &#128525;</div>
            </div>
          ) : null}
        </>
      </>
    );
  }
}
