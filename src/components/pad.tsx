import React, { Component, Fragment } from "react";
import _ from "lodash";
import { getDrums } from "../data/drums";
import styled from "styled-components";

const Button = styled.button`
  background: #444;
  border-radius: 3px;
  color: yellow;
  margin: 0 0.5em;
  padding: 1rem;
  border: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
`;

class Pad extends Component {
  state = {
    kit: {
      id: 1,
      name: "808",
      sounds: {
        boom: "../sounds/808/boom.wav",
        clap: "../sounds/808/clap.wav",
        hihat: "../sounds/808/hihat.wav",
        kick: "../sounds/808/kick.wav",
        openhat: "../sounds/808/ride.wav",
        snare: "../sounds/808/snare.wav",
        tink: "../sounds/808/tom.wav"
      }
    }
  };

  componentDidMount() {}

  render() {
    const { kit } = this.state;
    const sounds = kit.sounds;
    const pads = Object.values(sounds).map((sound, index) => {
      return (
        <Fragment>
          <Button key={index} data-key={index}>
            a
          </Button>
          <audio src={sound} data-key={index} key={index}></audio>
        </Fragment>
      );
    });
    return pads;
  }
}

export default Pad;
