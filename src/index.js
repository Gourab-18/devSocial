import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import styled from "styled-components";
// import "/index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Container> */}
    <div className="bg-blue]">
      <App />
    </div>
    {/* </Container> */}
  </React.StrictMode>
);

const Container = styled.div`
  background-color: hsl(210, 36%, 96%);
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
