import React from "react";
import ReactDOM from "react-dom";
import Template from "./components/templates/template1";
import "./style.css";

const App = () => (
  <Template/>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);