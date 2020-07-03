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
}

const handleAudio = useRef(null);

const handleClick = (e: any): void => {
  console.log("🚀", e);
  const audioElement = handleAudio.current;
  console.log("audioEl", audioElement);
};

const Pad = ({ sounds }: PadProps) => {
  const pads = sounds
    ? Object.entries(sounds).map(([key, value], index) => {
        return (
          <>
            <Button
              onClick={e => handleClick(e)}
              key={value["id"]}
              data-key={value["key"]}
            >
              {" "}
              {value["name"]}{" "}
            </Button>
            <Sound
              key={index}
              url={value["clip"]}
              playStatus="PLAYING"
              data-key={value["key"]}
              ref={handleAudio}
            />
          </>
        );
      })
    : "";
  return <>{pads}</>;
};

export default Pad;
