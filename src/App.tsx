import React, { Component } from "react";
import DrumPads from "./components/drumpads";
import { getDrums, getDrumKitByName } from "./data/drums";

interface AppProps {
  kit: object[];
}

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      kit: []
    };
  }

  componentDidMount() {
    const kitName = "808"; // hard coded for now, will be filter/drop down interface.
    this.setState({ kit: getDrumKitByName(kitName) });
  }

  getAppData = () => {
    return { kit: this.state };
  };

  render() {
    const { kit } = this.getAppData();
    return (
      <div className="app">
        <header className="app-header">React Drums</header>
        <section className="app-panel">
          <DrumPads kit={kit} />
        </section>
      </div>
    );
  }
}

export default App;
