import React from "react";
import ReactDOM from "react-dom";
import Template from "./components/templates/template1";
import "./style.css";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => (
  <Template/>
);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-5tlo9w2s.us.auth0.com"
    clientId="TNwWYOAgumPXBkkguOcjijXjfEikLO9S"
    redirectUri={"http://localhost:4000/"}
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);