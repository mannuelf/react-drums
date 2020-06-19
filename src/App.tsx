import React, { useState, useEffect } from "react";
import "./css/normalize.css";
import "./css/styles.css";
import drumPads from "./data/drums-808.json";
import Pads from "./components/pad";

function App() {
  const [pad, setPads] = useState({});

  useEffect(() => {
    setPads(drumPads);
  }, []);

  console.log(pad);

  return (
    <div className="app">
      <header className="app-header">React Drums</header>
      <section className="app-panel">
        <Pads />
      </section>
    </div>
  );
}

export default App;
