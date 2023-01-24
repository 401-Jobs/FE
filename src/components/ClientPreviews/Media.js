import React from "react";
import { client_prev_data } from "./client_prev_data.js";
const Media = (props) => {
  return (
    <div>
      <p style={{ fontSize: "x-large" }}>Media</p>
      <div>
        <p>
          <i class="fa-brands fa-linkedin"></i>
          <a
            style={{ textDecoration: "none" }}
            href={props.linkedin}
            target="_blank"
          >
            {" "}
            LinkedIn Account
          </a>
        </p>
        <p>
          <i class="fa-brands fa-facebook"></i>
          <a
            style={{ textDecoration: "none" }}
            href={props.porto}
            target="_blank"
          >
            {" "}
            Protofolio Link
          </a>
        </p>
        <p>
          <i class="fa-brands fa-github"></i>
          <a
            style={{ textDecoration: "none" }}
            href={props.github}
            target="_blank"
          >
            {" "}
            Github Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Media;
