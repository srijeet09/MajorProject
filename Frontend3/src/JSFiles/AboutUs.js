import "../CSSFiles/AboutUs.css";

export function AboutUs() {
  return (
    <>
      <h1 id="about1">ABOUT US</h1>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/315/497/original/online-voting-people-vote-using-an-app-on-their-smartphone-the-concept-of-electronic-voting-isometric-illustration-vector.jpg"
          alt=""
          style={{ height: "550px", width: "100%" }}
        />
      </div>

      <h1 id="we">WE ARE FUTURE</h1>

      <div>
        <img
          src="https://t4.ftcdn.net/jpg/04/59/76/37/360_F_459763789_BQCOkXgaO6YIt0OGFOXle5ZKUsEUf1Mf.jpg"
          alt=""
          style={{ height: "90%", width: "80%" }}
        />
      </div>

      <h2 id="pid"> OBJECTIVES:</h2>
      <div id="para">
        <ul>
          <li>
            <h5>Telematic voting is secure and has legal validity.</h5>
          </li>
          <br></br>
          <li>
            <h5>Electronic voting reduces the effort of preparing a poll.</h5>
          </li>
          <br></br>
          <li>
            <h5> Online voting optimizes the voter experience.</h5>
          </li>
          <br></br>
          <li>
            <h5>
              {" "}
              By using digital voting we take care of health and the
              environment.
            </h5>
          </li>
          <br></br>
          <li>
            {" "}
            <h5> Online voting means significant financial savings.</h5>
          </li>
        </ul>
      </div>

      <h2 id="pid">VISION</h2>
      <div id="para1">
        <ul>
          <li>
            <h5>Online voting for all kinds of events</h5>
          </li>
          <br></br>
          <li>
            <h5>
              Everything you need to organize online voting with legal validity.
            </h5>
          </li>
        </ul>

        <br></br>
      </div>
      <h2 id="pid" className="text-center">
        MISSION
      </h2>
      <div id="para2">
        Our mission is " Providing the Knowledge on the Future of Voting. “ Our
        goal is to support the implementation of modern election processes and
        technologies with the view of facilitating elections and increasing
        security and transparency. Voting technologies have the potential to
        improve elections and to increase voter turnout since remote voters and
        voters with disabilities are enabled to vote. We are convinced that
        voting technologies are the future of voting. We support election
        administrations and organizers as well as technology vendors in
        developing and implementing technology and tackling the challenges to
        enable a successful application.
      </div>

      <img
        src="https://thefulcrum.us/media-library/online-voting.jpg?id=23282983&width=3484&height=3071&quality=85&coordinates=0%2C0%2C0%2C0"
        alt=""
        style={{
          height: "90%",
          width: "100%",
          bottom: 0,
          margin: 0,
          padding: 0,
        }}
      />
    </>
  );
}
