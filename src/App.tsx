import React, { useState, useEffect } from "react";
import ReactGa from "react-ga";
import LogRocket from "logrocket";
import { getDrumKitByName } from "./utils/getDrums";
import _ from "lodash";
import Header from "./components/header";
import Footer from "./components/footer";
import Cable from "./components/common/cable";
import { Button } from "./components/common/button";

ReactGa.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS}`);
ReactGa.pageview(window.location.pathname + window.location.search);
LogRocket.init(`${process.env.REACT_APP_LOG_ROCKET_ID}/react-drum-maschine`);

function App(): JSX.Element {
  const kitName = "808";
  const [kit, setKit] = useState<Kit | undefined>();

  useEffect(() => {
    const drumKit = getDrumKitByName(kitName);
    setKit(drumKit);
  }, [setKit]);

  if (kit) {
    const { name, sounds } = kit;
    console.log(name, sounds);
    return (
      <>
        <div className="app">
          <Cable />
          <Header />
          <section className="app-panel">
            <div className="app-panel__controls">.</div>
            <div className="app-panel__controls">
              <div>
                {!sounds
                  ? "loading"
                  : sounds.map((sound: any) => <Button key={sound.id} />)}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="app">
        <Cable />
        <Header />
        <section className="app-panel">
          <div className="app-panel__controls">.</div>
          <div className="app-panel__controls">
            <div>No sounds loaded</div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
