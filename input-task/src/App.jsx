import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [reversedText, setReversedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleInputChange = (x) => {
    setText(x.target.value);
  };
  // bu  funksiya inputa simvol yazildiqda cagirilir  ve text i yenileyir

  const handleSubmit = (x) => {
    x.preventDefault();
    setSubmittedText(text);
    setReversedText("");
    setText("");
  };
  // handlesubmit form submit olunduqda cagirilir input sahesi ve reverseTexti sifirlayir

  const handleReverseText = () => {
    setIsLoading(true);
    setTimeout(() => {
      setReversedText(submittedText.split("").reverse().join(""));
      setIsLoading(false);
    }, 1000);
  };
  // bu funksiya reverse text duymesine click olunduqda cagirilir 1 saniye gecikme ile isleyir

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  // bu funksiya ile backrground fonunu light ve dark mode edirik

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <header>
        <button className="toggle-mode" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Metni daxil et"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <h1>
        Metindeki simvollarin sayi:{" "}
        <span
          style={{
            color: submittedText.length > 10 ? "white" : "black",
          }}
        >
          {submittedText.length}
        </span>
      </h1>
      {submittedText && (
        <div className="show">
          <h2>Gosterilen yazi: {submittedText}</h2>
        </div>
      )}
      {submittedText && (
        <div className="reverse">
          <div className="reverse-btn">
            <button
              className="btn btn-warning rev-btn"
              onClick={handleReverseText}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Reverse Text"}
            </button>
          </div>
          {reversedText && <h5>Tərs yazı: {reversedText}</h5>}
        </div>
      )}
    </div>
  );
}

export default App;
