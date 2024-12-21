import { useState } from "react";
import "./App.css";

function App() {
  const [navopen, setnavopen] = useState(false);
  return (
    <>
      <nav>
        <div className="wrap">
          <div className="button">
            <button onClick={() => setnavopen(!navopen)}>
              {navopen ? (
                <i className="fa-solid fa-x fa-xl"></i>
              ) : (
                <i className="fa-solid fa-bars fa-xl "></i>
              )}
            </button>
          </div>
          <div className="title">
            <h2>Navigation Panel</h2>
          </div>
        </div>
        {navopen ? (
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Favourite</li>
          </ul>
        ) : null}
      </nav>

      <div className="container">
        <h1>Murad Muradov</h1>
      </div>
    </>
  );
}

export default App;
