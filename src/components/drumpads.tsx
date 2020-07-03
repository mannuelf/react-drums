import React, { Component } from "react";
import Pad from "./pad";

// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/issues/57
type Props = {
  kit: object;
};

type State = {
  kit: object;
};

class DrumPad extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      kit: this.props
    };
  }

  render() {
    const { kit } = this.props;
    const kitArray = Object.entries(kit);
    const display = kitArray[0][1];
    const { sounds } = display;
    return (
      <>
        <Pad sounds={sounds} key={""} />
      </>
    );
  }
}

export default DrumPad;
