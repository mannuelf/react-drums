type Props = {
  keyChar: string;
};

const MachineKey = ({ keyChar }: Props): JSX.Element => {
  return <span className='pad-button-char'>{keyChar}</span>;
};

export default MachineKey;
