import React, { useState, useEffect } from "react";
import "./css/normalize.css";
import "./css/styles.css";
import Pad from "./components/pad";

function App() {
  return (
    <div className="app">
      <header className="app-header">React Drums</header>
      <section className="app-panel">
        <Pad />
      </section>
    </div>
  );
}

export default App;
