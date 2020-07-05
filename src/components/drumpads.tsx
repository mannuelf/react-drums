import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #444;
  border-radius: 3px;
  color: yellow;
  margin: 0 0.5em;
  padding: 1rem;
  border: none;
  height: auto;
  width: 100%;
  cursor: pointer;
  box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.4);
`;

// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/issues/57
type Props = {
  kit: object;
};

type State = {
  kit: object;
};

class DrumPads extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ kit: this.props });
    document.addEventListener("click", this.handleClick);
    document.addEventListener("keyDown", this.handleKeyDown);
  }

  handleKeyDown = (e: any): void => {
    console.log("handleKeyDown", e);
  };

  handleClick = (e: any): void => {
    console.log("handleClick");
  };

  render() {
    const { kit } = this.props;
    const kitArray = Object.entries(kit);
    const display = kitArray[0][1];
    const { sounds } = display;
    const pads = !sounds
      ? ""
      : Object.entries(sounds).map(([key, value]: any, index) => {
          return (
            <>
              <Button
                key={value["id"]}
                data-key={value["key"]}
                className="drum-pad"
                onClick={this.handleClick}
              >
                {" "}
                {value["name"]}{" "}
                <audio
                  id={`drum-pad__audio-${index}`}
                  key={index}
                  src={value["clip"]}
                  data-key={value["key"]}
                  className="drum-pad__audio"
                />
              </Button>
            </>
          );
        });

    return <>{pads}</>;
  }
}

export default DrumPads;
