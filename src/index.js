import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const url = "https://google.com";
const link = <a href={url}>Google</a>;
const colorRed = "red";
const url2 = "https://mobx.js.org/getting-started.html";
const url3 = "https://www.youtube.com/watch?v=hdroCjAuTzg&feature=youtu.be";
const link2 = <a href={url2}>MobX</a>;
const link3 = <a href={url3}>Plugins</a>;
const myArray = [link, link2, link3];


function App() {
  return (
    <div className="App">
      <h2>This crazy fox jumps over a dog {link}</h2>
      <p style={{ color: colorRed }}>{1 + 5 + 6}</p>
      <h1 style={{ color: colorRed}}> what </h1>
      <p> {link3} This is awesome {link2} how did you do that </p>
      <ul>{myArray.map(link => <li>{link}</li>)}</ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
