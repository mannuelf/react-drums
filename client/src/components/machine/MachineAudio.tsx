type Props = {
  id: string;
  keyChar?: string;
  keyCode?: number;
  src: string;
  title?: string;
};

const MachineAudio = (props: Props): JSX.Element => {
  return <audio {...props} />;
};

export default MachineAudio;
