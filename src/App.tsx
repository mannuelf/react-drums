import React, { Component } from "react";
import ReactGa from "react-ga";
import LogRocket from "logrocket";
import _ from "lodash";
import styled from "styled-components";
import { getDrumKitByName } from "./data/drums";
import Header from "./components/header";
import Footer from "./components/footer";
import Cable from "./components/common/cable";

require("dotenv").config();

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

export interface AppProps {
  kit: object[];
  onClick: () => void;
  onKeyDown: () => void;
  onKeyPress: () => void;
  sounds: object;
}

class App extends Component {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      kit: [],
      sounds: {},
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const kitName = "808";
    this.setState({ kit: getDrumKitByName(kitName) });
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("click", this.handleClick);
  }

  getAppData = () => {
    return { kit: this.state };
  };

  handleClick = (e: any) => {
    const key = e.target.dataset.key;
    const pad = document.querySelector(
      `button[data-key="${key}"]`
    ) as HTMLButtonElement;

    const audio = document.querySelector(
      `audio[data-key="${key}"]`
    ) as HTMLAudioElement;

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    pad.classList.add("playing");
  };

  handleKeyDown = (e: any) => {
    const key = e.keyCode || e.charCode;
    const pad = document.querySelector(
      `button[data-key="${key}"]`
    ) as HTMLButtonElement;
    const audio = document.querySelector(
      `audio[data-key="${key}"]`
    ) as HTMLAudioElement;

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    pad.classList.add("playing");
  };

  setSoundPanel() {
    const { kit } = this.getAppData();
    const allSounds: object[] = Object.entries(kit).map(
      ([key, value]: any, index) => {
        return value["sounds"];
      }
    );
    const cleanedSounds = _.compact(allSounds);
    return cleanedSounds;
  }

  render() {
    const pads = this.setSoundPanel();
    return (
      <>
        <div className="app">
          <Cable />
          <Header />
          <section className="app-panel">
            <div className="app-panel__controls">.</div>
            <div className="app-panel__controls">
              <div>
                {!pads
                  ? "Loading..."
                  : pads.map((sound: any, index) => {
                      return !sound
                        ? ""
                        : sound.map((item: any) => {
                            return (
                              <>
                                <Button
                                  onClick={(e) => this.handleClick(e)}
                                  onKeyDown={(e) => this.handleKeyDown(e)}
                                  onKeyPress={(e) => this.handleKeyDown(e)}
                                  key={item.id}
                                  data-key={item.keyCode}
                                  className="pad-button"
                                >
                                  <span className="pad-button-char">
                                    {item.keyChar}
                                  </span>
                                  <audio
                                    key={item.keyCode}
                                    src={item.src}
                                    data-key={item.keyCode}
                                  />
                                </Button>
                              </>
                            );
                          });
                    })}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
