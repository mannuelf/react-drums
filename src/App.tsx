import React, { Component } from "react";
import DrumPads from "./components/drumpads";
import { getDrumKitByName } from "./data/drums";

export interface AppProps {
  kit: object[];
}

class App extends Component {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      kit: []
    };
  }

  componentDidMount() {
    const kitName = "808"; // hard coded for now, will be filter/drop down interface.
    this.setState({ kit: getDrumKitByName(kitName) }); // yeah hooks next iteration
  }

  getAppData = () => {
    return { kit: this.state };
  };

  render() {
    const { kit } = this.getAppData();
    return (
      <div className="app">
        <header className="app-header">
          <h1>React Drums</h1>
          <h2>808 Drum</h2>
        </header>
        <section className="app-panel">
          <DrumPads kit={kit} />
        </section>
      </div>
    );
  }
}

export default App;
