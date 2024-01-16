import "./App.css";

function App() {
  return (
    <>
      <div className="hero-div">
        <h1 className="child">Eshan Sharma</h1>
        <p className="child" style={{ textAlign: "left", marginLeft: "43px" }}>
          I am a <b>Web Developer</b> in Harkirat's Cohort
        </p>
        <h3 className="child" style={{ textAlign: "left", marginLeft: "43px" }}>
          Interested
        </h3>
        <h3>
          <ul
            className="list"
            style={{ textAlign: "left", marginLeft: "43px" }}
          >
            <li>Learning</li>
            <li>Development</li>
            <li>Cycling</li>
          </ul>
        </h3>
        <div className="section">
          <button className="btn">
            <a href="https://www.linkedin.com/in/eshan-sharma-a87b12190/">LinkedIn</a>
          </button>
          <button className="btn">
            <a href="https://twitter.com/Eshan_Sharma__">X (Twitter)</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;