import React, { Fragment, Component } from "react";
import Pad from "./pad";
import _ from "lodash";

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

  componentDidMount() {
    console.log("Pad mounted", this.props);
  }

  render() {
    const { kit } = this.props;
    const kitArray = Object.entries(kit);
    const display = kitArray[0][1];
    const { sounds } = display;
    return (
      <Fragment>
        {console.log("sounds", display)}
        <h1 className="title">808 Drum</h1>
        <Pad id={1} name="808" url="./sounds/" sounds={sounds} keyboard="q" />
      </Fragment>
    );
  }
}

export default DrumPad;
