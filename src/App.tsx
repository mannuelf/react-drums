import React, { Component } from "react";
import styled from "styled-components";
import SVGLogo from "./img/maschinelogo.svg";
import { getDrumKitByName } from "./data/drums";
import SiteFooter from "./components/footer";
import Cable from "./components/common/cable";

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

interface AppProps {
  kit: object[];
}

class App extends Component {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      kit: []
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const kitName = "808"; // hard coded for now, will be filter/drop down interface.
    this.setState({ kit: getDrumKitByName(kitName) }); // yeah hooks next iteration
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("click", this.handleClick);
    document.addEventListener("transitionend", this.removeActiveClass);
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

  removeActiveClass = (e: any) => {
    const buttons = document.querySelectorAll(".pad-button");
    buttons.forEach(button => {
      console.log("button", button);
      button.addEventListener("transitionend", this.removeActiveClass);
      button.classList.remove("playing");
    });
  };

  render() {
    const { kit } = this.getAppData();
    const allSounds: object[] = Object.entries(kit).map(
      ([key, value]: any, index) => value["sounds"]
    );
    return (
      <>
        <div className="app">
          <Cable />
          <header className="app-header">
            <div className="column">
              <img src={SVGLogo} className="logo" alt="MASCHINE MIKRO" />
            </div>
            <div className="column">
              <div className="app-header-lcd">
                <h1>
                  React
                  <div>808 Drum</div>
                </h1>
              </div>
            </div>
          </header>
          <section className="app-panel">
            <div className="app-panel__controls">.</div>
            <div className="app-panel__controls">
              <div>
                {!allSounds
                  ? "Loading..."
                  : allSounds.map((sound: any, index) => {
                      return !sound
                        ? ""
                        : sound.map((item: any) => {
                            return (
                              <>
                                <Button
                                  onClick={e => this.handleClick(e)}
                                  onKeyDown={e => this.handleKeyDown(e)}
                                  onKeyPress={e => this.handleKeyDown(e)}
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
        <SiteFooter />
      </>
    );
  }
}

export default App;
