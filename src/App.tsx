import React, { useState, useEffect } from "react";
import * as dotenv from "dotenv";
import ReactGa from "react-ga";
import LogRocket from "logrocket";
import _ from "lodash";
import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
import Cable from "./components/common/cable";

dotenv.config({ path: __dirname + "./.env" });

ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
ReactGa.pageview(window.location.pathname + window.location.search);
LogRocket.init(`${process.env.REACT_APP_LOG_ROCKET_ID}/react-drum-maschine`);

const Button = styled.button`
  background: #444;
  border-radius: 3px;
  padding: 1rem;
  border: none;
  height: 68px;
  width: 100%;
  cursor: pointer;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export type AppProps = {
  drums: [
    {
      id: number;
      name: string;
      sounds: [];
    }
  ];
  onClick: () => void;
  onKeyDown: () => void;
  onKeyPress: () => void;
};

function App(): JSX.Element {
  const kitName = "808";
  const [kit, setKit] = useState([]);
  const [sounds, setSounds] = useState([]);

  return (
    <>
      <div className="app">
        <Cable />
        <Header />
        <section className="app-panel">
          <div className="app-panel__controls">.</div>
          <div className="app-panel__controls">
            <div>{kitName}</div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
