import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthWrapper } from "./context/auth";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { JoobSeekerWrapper } from "./context/joobseeker";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthWrapper>
      <JoobSeekerWrapper>
        <App />
      </JoobSeekerWrapper>
    </AuthWrapper>
  </React.StrictMode>
);
