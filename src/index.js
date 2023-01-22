import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthWrapper } from "./context/auth";


import { Provider } from "react-redux";
import { store } from "./redux/store";
import {JoobSeekerWrapper} from "./components/Context/joobseeker"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <JoobSeekerWrapper>
  <React.StrictMode>
    {/* <AuthWrapper> */}
    <App />
    {/* </AuthWrapper> */}
  </React.StrictMode>
  </JoobSeekerWrapper>
);
