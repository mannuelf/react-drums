import React, { useRef } from "react";
import Sound from "react-sound";
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

interface PadProps {
  sounds: object;
  handleClick: () => void;
}

const Pad = ({ sounds, handleClick }: PadProps) => {
  const pads = sounds
    ? Object.entries(sounds).map(([key, value], index) => {
        return (
          <>
            <Button
              key={value["id"]}
              data-key={value["key"]}
              className="drum-pad"
            >
              {" "}
              {value["name"]}{" "}
            </Button>
            <audio
              key={index}
              src={value["clip"]}
              data-key={value["key"]}
              className="drum-pad__audio"
            />
          </>
        );
      })
    : "";
  return <>pads</>;
};

export default Pad;
