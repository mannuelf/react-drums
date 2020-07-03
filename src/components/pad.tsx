import React, { Component, Fragment } from "react";
import Sound from "react-sound";
import _ from "lodash";
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

export interface PadProps {
  id: number;
  name: string;
  url: string;
  keyboard: string;
  sounds: object;
  onKeyDown?: () => void;
  onClick?: () => void;
}

const Pad = ({ id, name, url, keyboard, sounds }: PadProps) => {
  return <Button className="button">.</Button>;
  /* return Object.values(sounds).map((sound, index) => {
      return (
        <Fragment>
          <Button
            className="key"
            key={sound.key}
            data-key={sound.key}
            onKeyDown={e => this.handleKeyPress(e)}
            onClick={e => this.handleCick(e)}
          >
            <kbd>{sound.letter}</kbd>
            <span className="pad-label">{sound.name}</span>
          </Button>
          <audio src={sound.clip} key={index} data-key={sound.key}></audio>
        </Fragment>
      );
    });*/
};

export default Pad;
